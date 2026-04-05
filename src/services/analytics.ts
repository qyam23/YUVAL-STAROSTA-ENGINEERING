type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function getPagePath() {
  return `${window.location.pathname}${window.location.search}`;
}

function getLanguage() {
  return document.documentElement.lang || navigator.language || "en";
}

function getButtonText(element: HTMLElement) {
  return (
    element.getAttribute("aria-label") ||
    element.dataset.analyticsLabel ||
    element.textContent?.replace(/\s+/g, " ").trim() ||
    undefined
  );
}

function getFileInfo(pathname: string) {
  const parts = pathname.split("/");
  const fileName = parts.at(-1) || pathname;
  const extensionMatch = /\.([a-z0-9]+)$/i.exec(fileName);
  return {
    file_name: fileName,
    file_extension: extensionMatch?.[1]?.toLowerCase(),
  };
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, {
    page_path: getPagePath(),
    page_title: document.title,
    language: getLanguage(),
    ...params,
  });
}

export function initAnalytics() {
  const seenSections = new Set<string>();

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.4) continue;
        const element = entry.target as HTMLElement;
        const sectionName = element.dataset.analyticsSection;
        if (!sectionName || seenSections.has(sectionName)) continue;

        seenSections.add(sectionName);
        trackEvent("service_section_view", {
          section_name: sectionName,
        });
        sectionObserver.unobserve(element);
      }
    },
    { threshold: [0.4, 0.6] }
  );

  document.querySelectorAll<HTMLElement>("[data-analytics-section]").forEach((element) => {
    sectionObserver.observe(element);
  });

  const clickHandler = (event: MouseEvent) => {
    const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("a, button");
    if (!target) return;

    const href = target instanceof HTMLAnchorElement ? target.href : target.getAttribute("href") || "";
    const analyticsType = target.dataset.analytics;
    const buttonText = getButtonText(target);
    const sectionName = target.dataset.analyticsSectionName;
    const serviceName = target.dataset.analyticsServiceName;

    if (analyticsType === "nav-link") {
      trackEvent("nav_click", {
        button_text: buttonText,
        link_url: href || target.getAttribute("href") || "",
        section_name: sectionName,
        destination: target.getAttribute("href") || href,
      });
    }

    if (analyticsType === "footer-link") {
      trackEvent("footer_click", {
        button_text: buttonText,
        link_url: href || target.getAttribute("href") || "",
        section_name: sectionName,
        destination: target.getAttribute("href") || href,
      });
    }

    if (analyticsType === "contact-cta") {
      trackEvent("contact", {
        button_text: buttonText,
        section_name: sectionName,
        destination: "contact_modal",
      });
      trackEvent("cta_click", {
        button_text: buttonText,
        section_name: sectionName,
        destination: "contact_modal",
      });
    }

    if (analyticsType === "content-link") {
      trackEvent("cta_click", {
        button_text: buttonText,
        section_name: sectionName,
        service_name: serviceName,
        link_url: href || target.getAttribute("href") || "",
        destination: target.getAttribute("href") || href,
      });
    }

    if (analyticsType === "cta_click") {
      trackEvent("cta_click", {
        button_text: buttonText,
        section_name: sectionName,
        service_name: serviceName,
        link_url: href || target.getAttribute("href") || "",
        destination: target.getAttribute("href") || href || "interaction",
      });
    }

    if (!(target instanceof HTMLAnchorElement)) return;
    if (!href) return;

    const hrefLower = href.toLowerCase();
    const rawHref = target.getAttribute("href") || href;

    if (hrefLower.startsWith("mailto:")) {
      trackEvent("email_click", {
        button_text: buttonText,
        link_url: rawHref,
        destination: "email",
      });
      return;
    }

    if (hrefLower.startsWith("tel:")) {
      trackEvent("phone_click", {
        button_text: buttonText,
        link_url: rawHref,
        destination: "phone",
      });
      return;
    }

    if (hrefLower.includes("wa.me") || hrefLower.includes("whatsapp")) {
      trackEvent("whatsapp_click", {
        button_text: buttonText,
        link_url: href,
        destination: "whatsapp",
      });
    }

    if (hrefLower.includes("linkedin.com")) {
      trackEvent("linkedin_click", {
        button_text: buttonText,
        link_url: href,
        destination: "linkedin",
      });
    }

    let url: URL | null = null;
    try {
      url = new URL(href, window.location.origin);
    } catch {
      url = null;
    }

    if (url) {
      const pathname = url.pathname.toLowerCase();
      if (/\.(pdf|doc|docx|ppt|pptx|xls|xlsx|zip)(?:$|[?#])/.test(pathname)) {
        const fileInfo = getFileInfo(url.pathname);
        trackEvent("document_download", {
          button_text: buttonText,
          link_url: url.href,
          destination: url.href,
          ...fileInfo,
        });
      }

      if (url.origin !== window.location.origin && /^https?:$/.test(url.protocol)) {
        trackEvent("external_profile_click", {
          button_text: buttonText,
          link_url: url.href,
          destination: url.hostname,
        });
      }
    }
  };

  document.addEventListener("click", clickHandler);
  return () => {
    document.removeEventListener("click", clickHandler);
    sectionObserver.disconnect();
  };
}
