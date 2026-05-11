# 📸 Fotaza 2 — Proyecto Integrador

Comunidad web para compartir y gestionar imágenes.
Desarrollado para la cátedra **Programación Web II**.

## 🛠 Stack

- **Runtime:** Node.js
- **Framework:** Express v5
- **ORM:** Sequelize
- **Base de datos:** PostgreSQL
- **Motor de plantillas:** Pug
- **CSS:** Tailwind CSS v4

## 📁 Estructura del proyecto

    Fotaza2-Ferrando_Carlos/
    │
    ├── app.js                    # Entry point
    ├── .env.example              # Variables de entorno (plantilla)
    ├── .gitignore
    ├── README.md
    │
    ├── config/
    │   ├── db.js                 # Singleton — conexión Sequelize/PostgreSQL
    │   └── session.js            # Configuración de sesiones
    │
    ├── src/
    │   ├── controllers/          # Lógica de cada feature
    │   ├── models/               # Modelos Sequelize
    │   ├── services/             # Lógica de negocio (DRY)
    │   ├── middlewares/          # authGuard, roleGuard
    │   │   └── auth.js
    │   ├── routes/               # Definición de rutas
    │   │   └── index.js
    │   └── utils/                # Helpers reutilizables
    │
    ├── views/
    │   ├── layout.pug            # Layout base
    │   ├── mixins/               # Componentes reutilizables
    │   │   ├── card.pug
    │   │   ├── alert.pug
    │   │   └── avatar.pug
    │   ├── partials/             # Bloques fijos
    │   │   ├── navbar.pug
    │   │   └── footer.pug
    │   └── pages/                # Páginas completas
    │       ├── index.pug
    │       ├── login.pug
    │       └── register.pug
    │
    └── public/
        ├── css/
        │   └── input.css         # Entrada de Tailwind
        ├── js/
        └── uploads/              # Imágenes subidas por usuarios

## 🚀 Cómo correr el proyecto

1.  Clonar el repositorio

    git clone https://github.com/FerrandoCarlos/Fotaza2-Ferrando_Carlos.git

2.  Instalar dependencias

    npm install

3.  Configurar variables de entorno

        cp .env.example .env

    Editar `.env` con tus datos de PostgreSQL

4.  Compilar Tailwind _(terminal 1)_

    npm run tailwind

5.  Arrancar el servidor _(terminal 2)_

    npm run dev

## 👤 Desarrollado por

**Carlos Ferrando** — Programación Web II
