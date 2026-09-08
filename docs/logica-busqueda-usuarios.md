# Lógica de búsqueda e indexado de usuarios

## Pregunta

Quiero que el usuario en CLI pueda ingresar el nombre y apellido para buscar
un usuario, indexarlo y poder obtener su información.

## Estado actual (antes del fix)

- [crearUsuario.ts](../utils/crearUsuario.ts) crea un `Usuario` y lo retorna,
  pero [cli.ts:17](../utils/cli.ts#L17) llama a `crearUsuario()` y descarta el
  resultado — no hay ningún array que acumule los usuarios creados.
- [mostrarInformacion.ts:4](../utils/mostrarInformacion.ts#L4) recibe
  `usuario: string` (el texto crudo "nombre apellido" del prompt) y hace
  `usuario instanceof Administrador` directamente sobre ese string. Un string
  nunca es `instanceof` una clase, así que esa rama siempre cae en
  "Tipo de usuario no reconocido".
- `indexarUsuario.ts` tiene las cuatro funciones de indexado, pero ninguna se
  usa todavía.

## Lógica correcta

1. **Persistir usuarios** — mantener un array (`usuarios: Usuario[]`) que
   viva durante todo el loop del CLI (en `cli.ts` o un módulo dedicado). Cada
   resultado de `crearUsuario()` se pushea a ese array.
2. **Construir el índice desde ese array** — llamar a
   `indexarPorNombreApellido(usuarios)` para obtener un
   `Map<string, Usuario>` con clave `"Nombre Apellido"`. Se puede reconstruir
   el mapa en cada búsqueda (simple, arrays chicos) o actualizarlo
   incrementalmente en cada alta.
3. **Buscar, no castear** — `mostrarInformacion.ts` debe recibir el mapa (o
   el array) más el string de búsqueda, hacer `mapa.get(nombreApellido)`, y
   recién ahí correr los `instanceof` sobre el objeto obtenido, no sobre el
   string de entrada. Manejar explícitamente el caso `undefined` (usuario no
   encontrado).

### Flujo resultante

```
cli.ts: usuarios[] (persistido durante el loop)
  → en "crear": usuarios.push(crearUsuario())
  → en "mostrar": key = prompt(...)
                  mapa = indexarPorNombreApellido(usuarios)
                  usuario = mapa.get(key)
                  mostrarInformacionUsuario(usuario)   // Usuario | undefined
```

La firma de `mostrarInformacion.ts` debe cambiar de `(usuario: string)` a
`(usuario: Usuario | undefined)`.

El fix lo implementé yo (Faku) con la guia de Claude.