#!/bin/bash

echo "Iniciando sincronización de Dr Bent Web con GitHub..."

git status

echo "Actualizando desde origin/main..."
git pull origin main --rebase

echo "Instalando dependencias si es necesario..."
npm install

echo "Ejecutando build..."
npm run build

if [ $? -ne 0 ]; then
  echo "El build falló. No se realizará commit ni push."
  exit 1
fi

echo "Agregando cambios..."
git add .

echo "Creando commit..."
git commit -m "Update Dr Bent Web"

echo "Subiendo cambios a GitHub..."
git push origin main

echo "Sincronización completada."
