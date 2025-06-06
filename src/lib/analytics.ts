// Analytics utility functions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (...args: any[]) => void;
  }
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackEvent = ({
  action,
  category,
  label,
  value,
}: AnalyticsEvent) => {
  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Plausible Analytics
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(action, {
      props: {
        category,
        label,
        value,
      },
    });
  }

  // Console log for development
  if (process.env.NODE_ENV === "development") {
    console.log("Analytics Event:", { action, category, label, value });
  }
};

// Predefined tracking functions
export const trackProjectView = (projectName: string) => {
  trackEvent({
    action: "view_project",
    category: "engagement",
    label: projectName,
  });
};

export const trackContactClick = () => {
  trackEvent({
    action: "click_contact",
    category: "engagement",
  });
};

export const trackDownloadCV = () => {
  trackEvent({
    action: "download_cv",
    category: "engagement",
  });
};

export const trackExternalLink = (url: string) => {
  trackEvent({
    action: "click_external_link",
    category: "engagement",
    label: url,
  });
};
