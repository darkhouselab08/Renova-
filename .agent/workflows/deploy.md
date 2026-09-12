---
description: Proceso de despliegue a producción
---

# Workflow: Despliegue a Producción

Este workflow documenta el proceso de deploy de Renova.

## Estrategia de Despliegue

```
develop → staging → main → production
```

- **develop**: Rama de desarrollo activo
- **staging**: Ambiente de pruebas (pre-producción)
- **main**: Código en producción
- **production**: Deploy automático desde main

## Pre-requisitos

- [ ] Cuenta en Vercel (recomendado para Next.js)
- [ ] Repositorio en GitHub
- [ ] Variables de entorno configuradas
- [ ] Testing completo realizado

---

## Fase 1: Deploy Inicial (Primera vez)

### Paso 1: Crear cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Sign up con GitHub
3. Autoriza acceso a tu repositorio

### Paso 2: Importar proyecto

1. Click en "Add New Project"
2. Selecciona `renova-hub` de tu lista de repos
3. Vercel detectará automáticamente Next.js

### Paso 3: Configurar proyecto

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### Paso 4: Variables de entorno

Agrega las variables necesarias:

```env
# Ejemplo (agregar según necesites)
NEXT_PUBLIC_SITE_URL=https://renova-hub.vercel.app
NEXT_PUBLIC_API_URL=https://api.renova-hub.com

# Futuras integraciones
SUPABASE_URL=
SUPABASE_ANON_KEY=
STRIPE_PUBLIC_KEY=
```

### Paso 5: Deploy

Click en "Deploy" y espera a que termine.

✅ Tu sitio estará en: `https://renova-hub.vercel.app`

---

## Fase 2: Configurar Ambientes

### Desarrollo (develop branch)

```bash
# En Vercel Dashboard
Settings → Git → Production Branch: main
Settings → Git → Preview Branches: develop
```

Cada push a `develop` creará un preview deployment.

### Staging

Opción 1: Usar preview deployments de Vercel
Opción 2: Crear proyecto separado en Vercel para staging

### Producción (main branch)

Solo merges a `main` despliegan a producción.

---

## Fase 3: Deploy Regular

### Paso 1: Verificar que todo funciona localmente

```bash
# Build local
npm run build

# Probar build
npm start
```

✅ Verificar en http://localhost:3000

### Paso 2: Merge a develop

```bash
git checkout develop
git merge feature/tu-rama
git push origin develop
```

✅ Vercel creará un preview deployment automáticamente

### Paso 3: Probar en staging

1. Ve a Vercel Dashboard
2. Click en el deployment de `develop`
3. Verifica que todo funcione
4. Prueba en diferentes dispositivos

### Paso 4: Crear Pull Request a main

```bash
# En GitHub
develop → main
```

**Template de PR a main**:

```markdown
## Release: [Versión]

### Cambios incluidos

- Feature 1
- Feature 2
- Bug fix 1

### Testing realizado

- [ ] Build exitoso
- [ ] Testing manual
- [ ] Responsive verificado
- [ ] Performance verificado

### Deployment checklist

- [ ] Variables de entorno actualizadas
- [ ] Migraciones de DB (si aplica)
- [ ] Assets optimizados
- [ ] SEO verificado
```

### Paso 5: Merge a main

Una vez aprobado el PR:

```bash
git checkout main
git merge develop
git push origin main
```

✅ Vercel desplegará automáticamente a producción

### Paso 6: Verificar producción

- [ ] Sitio carga correctamente
- [ ] No hay errores en consola
- [ ] Todas las funcionalidades operan
- [ ] Performance es aceptable (Lighthouse > 90)

---

## Fase 4: Rollback (Si algo sale mal)

### Opción 1: Rollback en Vercel

1. Ve a Vercel Dashboard
2. Deployments
3. Click en el deployment anterior estable
4. "Promote to Production"

### Opción 2: Revert en Git

```bash
git checkout main
git revert HEAD
git push origin main
```

---

## Comandos Útiles

### Ver deployments

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Ver deployments
vercel list

# Deploy manual
vercel --prod
```

### Logs en producción

```bash
# Ver logs en tiempo real
vercel logs [deployment-url]
```

---

## Checklist de Deploy

### Pre-Deploy

- [ ] Build local exitoso
- [ ] Linter sin errores
- [ ] TypeScript sin errores
- [ ] Testing manual completado
- [ ] Performance verificado
- [ ] SEO verificado
- [ ] Variables de entorno configuradas

### Durante Deploy

- [ ] Build en Vercel exitoso
- [ ] No hay warnings críticos
- [ ] Assets se suben correctamente

### Post-Deploy

- [ ] Sitio accesible
- [ ] Funcionalidades operativas
- [ ] No hay errores en consola
- [ ] Performance aceptable
- [ ] SEO funcionando
- [ ] Analytics configurado (futuro)

---

## Monitoreo

### Métricas a vigilar

1. **Performance**
   - Core Web Vitals
   - Lighthouse Score
   - Tiempo de carga

2. **Errores**
   - Errores de JavaScript
   - Errores de API
   - 404s

3. **Tráfico**
   - Visitantes únicos
   - Páginas vistas
   - Bounce rate

### Herramientas recomendadas

- **Vercel Analytics**: Incluido gratis
- **Google Analytics**: Para tráfico detallado
- **Sentry**: Para error tracking (futuro)
- **Lighthouse CI**: Para performance (futuro)

---

## Troubleshooting

### Build falla en Vercel

```bash
# Verificar localmente
npm run build

# Ver logs detallados en Vercel
Deployment → Build Logs
```

### Variables de entorno no funcionan

- Verificar que tengan prefijo `NEXT_PUBLIC_` para client-side
- Redeploy después de agregar variables
- Verificar que no haya typos

### Sitio no actualiza

- Verificar que el deployment sea exitoso
- Limpiar caché del navegador
- Verificar en modo incógnito

---

## Futuras Mejoras

- [ ] CI/CD con GitHub Actions
- [ ] Testing automatizado pre-deploy
- [ ] Preview deployments para cada PR
- [ ] Automatic dependency updates (Dependabot)
- [ ] Performance budgets
- [ ] Automated lighthouse checks

---

**Notas**:

- Vercel es gratis para proyectos personales
- Deploy automático está habilitado por defecto
- Cada push crea un deployment único con URL
- Production deployments solo desde `main`
