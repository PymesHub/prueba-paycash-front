# 🚀 **Next.js Clean Architecture App**

¡Bienvenido! Este proyecto es una **aplicación web moderna** construida con tecnologías de punta, enfocada en **Clean Architecture** para mantener la lógica desacoplada y bien organizada. 🧹✨

---

## 🛠️ **Tecnologías principales**

### Frontend 🌐

- **[Next.js](https://nextjs.org/):** Framework React para aplicaciones web rápidas y escalables.
- **[NextUI](https://nextui.org/):** Librería de componentes UI para un diseño moderno y atractivo.
- **[React](https://reactjs.org/):** Biblioteca de JavaScript para interfaces de usuario interactivas.
- **[TypeScript](https://www.typescriptlang.org/):** Tipado estático para un código robusto y claro.
- **[useSWR](https://swr.vercel.app/):** Manejo de datos con soporte para revalidación en tiempo real.

### Backend 🖧

- **AWS Lambda:** Microservicios serverless, altamente escalables y eficientes.
- **Clean Architecture:** Separación de responsabilidades para un código limpio y mantenible.

---

## 🎯 **Características principales**

- 📏 **Clean Architecture**: Organización del proyecto que separa la lógica de negocio de la implementación, asegurando modularidad y facilidad de mantenimiento.
- 🎨 **UI moderna**: Diseñada con **NextUI** para una experiencia de usuario fluida y atractiva.
- ⚡ **Eficiencia**: Utiliza **AWS Lambda** para manejar el backend de manera escalable y sin servidores.
- 📡 **Data Fetching**: Implementado con **useSWR** para gestionar datos con revalidación automática.
- 🛡️ **Seguridad y escalabilidad**: Integración con TypeScript para prevenir errores en tiempo de desarrollo.
- **Despeglado en amplify**: No te preocupes por correrlo en tu entorno local, ya esta implementando en amplify:

---

## 🚀 **Cómo correr este proyecto**

### 1️⃣ Clona el repositorio

```bash
git clone https://github.com/tuusuario/nombre-proyecto.git
cd nombre-proyecto
```

### 2️⃣ Instala las dependencias

```bash
npm install --force (existe una dependecia react-lottie que no es compatible con las nuevas versiones)
# o
yarn install
```

### 3️⃣ Crea un archivo `.env`

Define las variables necesarias para la conexión con el backend. Por ejemplo:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

### 4️⃣ Corre el proyecto en modo desarrollo

```bash
npm run dev
```

### 5️⃣ Abre tu navegador

Visita: [http://localhost:3000](http://localhost:3000) 🚀

---

## 🔧 **Scripts útiles**

| Comando         | Descripción                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Inicia la app en modo desarrollo        |
| `npm run build` | Construye la aplicación para producción |
| `npm start`     | Inicia la app en modo producción        |
| `npm run lint`  | Linting del código                      |

---

## 🧑‍💻 **Contribución**

¡Las contribuciones son bienvenidas! Si tienes una mejora o encuentras un bug, siéntete libre de abrir un **issue** o enviar un **pull request**.

---

## 🛡️ **Licencia**

Este proyecto está bajo la licencia **MIT**.
