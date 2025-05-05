# Badania API — Development Setup & Docker

## 📦 Wymagania wstępne

- Docker i Docker Compose zainstalowane na Twoim systemie
lub
- Środowisko node v20

## 🔧 Budowanie kontenerów

W pierwszej kolejności zbuduj obrazy dockera:

```bash
docker-compose build
```

## 🔧 Uruchamianie kontenera
Aby uruchomić aplikację w tle wpisujemy:

```bash
docker-compose up -d
```

## 🔧 Uruchamianie bez Dockera
Aby uruchomić aplikację bez Dockera po kolei wpisujemy:
- w celu instalacji zalezności
```bash
npm i
```
- uruchamiamy aplikację:
```bash
npm run dev
```

aplikacja jest uruchomiona pod [http://localhost:5173](http://localhost:5173)
