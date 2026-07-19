"use client";

import { ArrowDownToLine, Share, X } from "lucide-react";
import { useEffect, useState } from "react";

// Chrome fires this before the native install; iOS Safari never does (add-to-home is manual).
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "hijabk-pwa-dismissed";
const remember = () => {
  try {
    localStorage.setItem(DISMISS_KEY, "1");
  } catch {}
};

export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [ios, setIos] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // prod-only: a dev service worker fights Next's HMR caching
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    const installed =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(DISMISS_KEY) === "1";
    } catch {}
    if (installed || dismissed) return;

    let timer: number;
    const reveal = () => {
      timer = window.setTimeout(() => setOpen(true), 2500);
    };

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      reveal();
    };
    const onInstalled = () => {
      setOpen(false);
      remember();
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);

    // iOS Safari (not Chrome/Firefox on iOS) → show manual add-to-home hint
    const ua = navigator.userAgent;
    if (/iphone|ipad|ipod/i.test(ua) && !/crios|fxios/i.test(ua)) {
      setIos(true);
      reveal();
    }

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        remember();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const dismiss = () => {
    setOpen(false);
    remember();
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    dismiss();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[90] sm:inset-x-auto sm:start-6 sm:bottom-6 sm:max-w-sm">
      <div
        role="dialog"
        aria-labelledby="pwa-install-title"
        className="sheet-in relative flex flex-col gap-3 rounded-3xl border border-brass/40 bg-muslin p-4 pe-12 shadow-[0_28px_64px_-24px_oklch(0.25_0.02_55/0.55)]"
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="إغلاق"
          className="absolute end-1.5 top-1.5 flex size-11 items-center justify-center rounded-full text-espresso/50 transition-colors hover:bg-espresso/5 hover:text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-4" />
        </button>

        <div className="flex items-start gap-3.5">
          <img
            src="/icon-192.png"
            alt=""
            aria-hidden
            width={192}
            height={192}
            className="size-14 shrink-0 rounded-2xl ring-1 ring-espresso/10"
          />
          <div className="flex flex-col gap-1">
            <h2 id="pwa-install-title" className="font-display text-xl font-bold leading-tight">
              حجابك على شاشتكِ
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              {ios ? (
                <>
                  اضغطي زرّ المشاركة{" "}
                  <Share aria-hidden className="inline size-4 -translate-y-0.5 text-olive" /> ثمّ
                  اختاري «إضافة إلى الشاشة الرئيسية».
                </>
              ) : (
                "أضيفيه إلى شاشتكِ الرئيسية — يفتح بلمسة، ويعمل حتى بلا إنترنت."
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 ps-[4.375rem]">
          {ios ? (
            <button
              type="button"
              onClick={dismiss}
              className="flex h-11 items-center rounded-full bg-olive px-6 text-sm font-medium text-ivory transition-colors hover:bg-olive-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              تمام
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={install}
                className="flex h-11 items-center gap-2 rounded-full bg-olive px-5 text-sm font-medium text-ivory transition-colors hover:bg-olive-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <ArrowDownToLine className="size-4" />
                تثبيت التطبيق
              </button>
              <button
                type="button"
                onClick={dismiss}
                className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-espresso/70 transition-colors hover:text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                لاحقاً
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
