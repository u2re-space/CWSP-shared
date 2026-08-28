# CWSP-shared

Библиотечные extras для приложений CWSP: AI-хелперы, document tools, OPFS, транспорт. Это **не** SPA и **не** Chrome-расширение.

Не путать с `modules/projects/cwsp-shared` (протокол / helpers для Capacitor и Neutralino). CRX собирается только в [`CWSP-crx`](../CWSP-crx/).

```ts
import "cwsp-shared";
import "cwsp-shared/shared";
```

`npm run build` ничего не бандлит — пакет импортируют по exports.
