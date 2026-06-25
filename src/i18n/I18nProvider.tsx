"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/i18n/locales/en.json";
import es from "@/i18n/locales/es.json";

export type Locale = "en" | "es";

type Params = Record<string, string | number>;

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Params) => string;
  tm: <T>(key: string) => T;
};

const STORAGE_KEY = "portfolio_locale";
const dictionaries = { en, es } as const;

const I18nContext = createContext<I18nContextValue | null>(null);

function getByPath(source: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, segment) => {
    if (current && typeof current === "object" && segment in current) {
      return (current as Record<string, unknown>)[segment];
    }

    return undefined;
  }, source);
}

function interpolate(template: string, params?: Params): string {
  if (!params) {
    return template;
  }

  return template.replace(/\{(\w+)\}/g, (_, token: string) => {
    const value = params[token];

    return value === undefined ? `{${token}}` : String(value);
  });
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLocale = window.localStorage.getItem(STORAGE_KEY);

    if (savedLocale === "en" || savedLocale === "es") {
      return savedLocale;
    }

    return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => {
    const dictionary = dictionaries[locale];

    return {
      locale,
      setLocale,
      t: (key: string, params?: Params) => {
        const candidate = getByPath(dictionary, key);

        if (typeof candidate !== "string") {
          return key;
        }

        return interpolate(candidate, params);
      },
      tm: <T,>(key: string): T => {
        return getByPath(dictionary, key) as T;
      },
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
