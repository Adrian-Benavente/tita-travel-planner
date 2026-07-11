# Tita Travel Planner

Landing page de **Tita Travel Planner** (asesoría personalizada de viajes, Lima — Perú). Stack: Next.js, TypeScript, Tailwind CSS y Framer Motion.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando       | Descripción              |
| ------------- | ------------------------ |
| `npm run dev` | Servidor de desarrollo   |
| `npm run build` | Build de producción    |
| `npm start`   | Sirve el build           |
| `npm run lint`  | ESLint                 |

## Deploy en Vercel (gratis)

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com), importa el proyecto.
3. Framework preset: **Next.js** (detección automática).
4. Deploy. Obtendrás una URL `*.vercel.app` para que el cliente revise en el navegador.

No es necesario configurar dominio propio en esta etapa.

## Contenido legal

Las páginas `/terminos` y `/privacidad` son **borradores** para revisión de la titular. El bloque ESNNA está visible en el home; si se aporta el afiche oficial MINCETUR, se puede reemplazar el asset.

## Brand

Lineamientos en [`GUIDELINES.md`](./GUIDELINES.md). Tipografías en `assets/fonts` (self-hosted vía `next/font/local`). Imagen hero en `public/img/hero.png`.
