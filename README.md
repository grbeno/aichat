# Real Time AI-Chat using Django and React
:white_check_mark: Asynchronous chat (Channels, WebSocket)<br />
:white_check_mark: AI/LLM API consuming (OpenAI)<br />
:white_check_mark: Chat memory using Redis layer<br />
:white_check_mark: Production: Docker, Railway<br />

## For development or testing purposes

### Add a .env file with the necessary variables to the root/project directory
```env
OPENAI_API_KEY=<api-key>
SECRET_KEY=<secret-key>
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```
### The app uses OpenAI API-key, but any provider's API should work (read the provider's documentation)
[https://platform.openai.com/docs/quickstart?api-mode=chat](https://platform.openai.com/docs/quickstart?api-mode=chat)
### If Python is installed, a secret key can be generated with this command
Set to 32 [nbytes] for a 64 long key.
```
python -c "import secrets;print(secrets.token_hex(32))"
```

### Running application as Docker image
```
docker build .
```
```
docker-compose -f docker-compose-dev.yml up --build
```
Removing containers:
```
docker-compose -f docker-compose-dev.yml down
```
#### Run the app in the web browser
```
http://localhost:8000
```

## On Production
### This app can be deployed to Railway
[https://railway.com/](https://railway.com/)
#### Key steps
- Add new project from GitHub
- Set domain on the port 8080
- Set the same variables except `DEBUG` in the Settings panel but change `ALLOWED_HOSTS` to the new domain
- Use Start Command: `daphne -b 0.0.0.0 -p 8080 config.asgi:application`
- Grab `docker-compose-railway.yml` from your file browser and drop on project canvas

