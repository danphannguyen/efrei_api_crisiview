# 1 - Configuration Jenkins pour build/push Docker

1) Créer le jobs 
- Name: Integration-Delivery-Pipeline-Backend
- Type: Pipeline script from SCM
- Repository URL: https://github.com/danphannguyen/efrei_api_crisiview.git
- Branch specifier: */main
- Script path: Jenkinsfile.cicd
- Add Parameter → "String Parameter".
  - `APP_NAME` - nom de l'application, ici `efrei-api-crisiview` (utilisé pour Sonar et Docker)
  - `DOCKERHUB_NAMESPACE` — votre nom d'utilisateur ou organisation Docker Hub (ex. `dvnpn`).
  - `DOCKERHUB_REPO_NAME` — nom du repository Docker Hub pour l'image backend (ex. `efrei-api-crisiview`). 
  **Obligatoire** — le pipeline échouera si non défini.

⚠️ Avant de lancer la pipeline il faut impérativement créer les repository sur Dockerhub ⚠️

# 2 - Configuration Jenkins pour Deploy
1) Créer le jobs 
- Name: Deploy-Pipeline-Backend
- Type: Pipeline script from SCM
- Repository URL: https://github.com/danphannguyen/efrei_api_crisiview.git
- Branch specifier: */main
- Script path: Jenkinsfile.deploy
- Add Parameter → "String Parameter".
  - `DEPLOY_HOST`: l'ip de votre machine de déploiement
  - `DEPLOY_USER`: Utilisateur SSH pour le déploiement
  **Obligatoire** — le pipeline échouera si non défini.
