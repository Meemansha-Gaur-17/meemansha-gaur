import { CARD_THEMES, CREDENTIALS } from "./constants";

export default function CredentialsBento() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-16">
      {CREDENTIALS.map((item, i) => {
        const theme = CARD_THEMES[i % CARD_THEMES.length];

        return (
          <div
            key={item.title}
            className="rounded-2xl px-4 py-4 flex flex-col gap-2.5"
            style={{ background: theme.bgGrad }}
          >
            <div
              className="w-6 h-0.5 rounded-full shrink-0"
              style={{ backgroundColor: theme.rule }}
            />
            <p className={`font-body text-sm font-semibold leading-snug ${theme.title}`}>
              {item.title}
            </p>
            {item.subtitle && (
              <p className="font-body text-xs leading-snug" style={{ color: theme.desc }}>
                {item.subtitle}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
