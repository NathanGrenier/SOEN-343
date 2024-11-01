# About

[![Deploy](https://github.com/NathanGrenier/SOEN-343/actions/workflows/deploy.yaml/badge.svg)](https://github.com/NathanGrenier/SOEN-343/actions/workflows/deploy.yaml)

## Stack
- **Frontend:** React
- **Client Side Routing**: [React Router](https://reactrouter.com/en/main/start/tutorial)
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
| Name              | Value                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| NODE_ENV          | development                                                                                       |
| POSTGRES_DB       | app                                                                                               |
| POSTGRES_USER     | postgres                                                                                          |
| POSTGRES_PASSWORD | changeme                                                                                          |
| POSTGRES_HOST     | db                                                                                                |
| POSTGRES_PORT     | 5432                                                                                              |
| POSTGRES_SSLMODE  | disable                                                                                           |
| POSTGRES_URL      | postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB} |
| PORT              | 3001                                                                                              |
| API_PATH          | /api                                                                                              |
| VITE_SERVER_URL   | http://localhost:3001                                                                             |

### Using Docker Compose (Dev Environment)

First, make sure you have [docker](https://docs.docker.com/engine/install/) installed for your system.

To spin **up** the dev environment, use `docker compose up`.

After all of the services have started, you can access the application at `http://localhost:5173/`

To spin **down** the container, use `docker compose down`. 

> If any changes were made to the app's structure (anything not in `/src`), you might need to rebuild the docker images using `docker compose up --build`. Ex: installing a new package, changing some config files, 

> Using docker isn't necessary to spin up the development environment, but it is recommended (what I use). You can also use `npm run dev` in the root directory `./` of the project to start each service on your host machine.

### Working with Migrations

#### Applying Existing Migrations

To apply the migrations (up portion) in `./packages/server/migrations`, run the following command: `npm run migration:up`

To apply the down portion of the migration, use: `npm run migration:down`

#### Creating a New Migration

To create a migration, use: `npm run migrate:create`

> You can change the `--migration-file-language` flag's value to ts if you want to write your migration in typescript instead of raw sql.

You can also use the package directly with `npx`: `npx node-pg-migrate create {your_migration_name} --migration-file-language {js,ts,sql}`

### Publishing Docker Image using Docker Compose
First, login to docker using the following command:

```sh
docker login --username {{ USERNAME }} --password {{ GITHUB_ACCESS_TOKEN }} ghcr.io 
```

> Note, you will need to generate a new Github access token (classic) with the proper registry permissions (read, write, delete).

Now, build the production Dockerfile using: `docker build -f Dockerfile.prod -t ghcr.io/nathangrenier/soen-343:latest .`

To push the built image to the registry, use: `docker push ghcr.io/nathangrenier/soen-343:latest`

### Using pgadmin to View the Database
> You should [install docker](https://docs.docker.com/engine/install/) for you system before starting.

Both the Postgres instance and database management tool (pgAdmin) are configured in the `docker-compose.yml` file.

> The credentials (email, password) for pgadmin can be found in the `docker-compose.yaml` file.

1. To run both services, use `docker compose up`.
    > You can run the container in "detached" mode by appending the `-d` flag to the command above.
2. Next, check that both services are running with `docker ps`.
3. Copy the "postgres" services docker id (ex: 1fc60e0e538d).
4. Inspect the details of the postgres container using `docker inspect {postgres id}`.
5. Search for the `IPAddress` attribute of the postgres database and keep note of it.
6. Open `http://localhost:5050/` to view the pgAdmin webpage.
7. Click on the "Add New Server" Quick Link in pgAdmin to add the postgres instance.
8. In the General tab: 
   - Give the postgres server a name.
    > ![](/static/pgAdmin-General.png)
9. In the Connection Tab: 
   - Enter the postgres container's ip address
   - Enter the same username as in the `.env` file (POSTGRES_USER) 
   - Enter the same password as in the `.env` file (POSTGRES_PASSWORD)
    > ![](/static/pgAdmin-Connection.png)