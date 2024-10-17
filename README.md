# About

## Stack
- **Frontend:** React
- **Backend:** Express
- **Frontend Bundler:** Vite
- **Language**: Typescript
- **Styling**: Tailwind CSS
- **Database**: PostgresSQL
- **Migrations**: TBD
- **Deployment**: Docker 

## Team Members and their Roles

| Name               | Student ID | Role                    |
| ------------------ | ---------- | ----------------------- |
| Nathan             | 40250986   | Development/DevOps Team |
| Nathanial Hwong    | 40243583   | Development Team        |
| Veronique Touma    | 40249766   | UI/UX Specialist        |
| Christelle Charles | 40249246   | Product Manager         |
| Imen Khezzar       | 40246836   | Quality Expert          |
| Ryan Rebbas        | 402180237  | Database Specialist     |

## UML Diagrams
In order to create all UML diagrams needed for the project, plantuml (files with the `.pu` extension) were used.

It's recommended to install the `jebbs.plantuml` VsCode Extension to view and edit the working plantuml files.

Additionally, reference the [docs](https://plantuml.com/) to learn how to create UML diagrams using plantuml's syntax.

## Contributing

### Installing Node Modules

This workspace is being treated as a monorepo. This means that there are multiple (client, server) services contained in the repository. Installing each service's dependencies isn't necessary to spin up the development docker containers. However, you should still do so if you want to take advantage of the quality of life dev packages (and to not have any vscode errors).

Do install all dependencies in the project, use the install script `./install-all.sh`.

> If you don't have perms to run the file, use the following command:  `chmod +x install-all.sh`

### Environment Variables and Secrets

Create a `.env` file and add these environment variables:
| Name                 | Value                 |
| -------------------- | --------------------- |
| POSTGRES_HOST        | db                    |
| POSTGRES_USER        | postgres              |
| POSTGRES_DB          | app                   |
| POSTGRES_PORT        | 5432                  |
| POSTGRES_SSLMODE     | disable               |
| PORT                 | 3001                  |
| VITE_SERVER_API_PATH | /api                  |
| VITE_SERVER_URL      | http://localhost:3001 |

Generate a safe password for your database using the following command:  `openssl rand -base64 32 > db/password.txt`

### Using Docker Compose (Dev Environment)

First, make sure you have [docker](https://docs.docker.com/engine/install/) installed for your system.

To spin **up** the dev environment, use `docker compose up`.
To spin **down** the container, use `docker compose down`. 

> Using docker isn't necessary to spin up the development environment, but it is recommended (what I use). You can also use `npm run dev` in the root directory `./` of the project to start each service on your host machine.
