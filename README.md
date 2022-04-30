# React
Practice Repository for React

# dashboard-analitica-api

API Rest para el proyecto DashBoard Analítica con el cual se obtendrá la información requerida para el Tablero de Desempeño Institucional

## Contenido
Este proyecto cuenta con tres ramas principales (branches)
- main
- developer
- bugfixes

## Pre-requisitos
- SSH key ED25519 

Para realizar todos los comandos GIT a través de una conexión segura SSH.

Crear una llave SSH desde la linea de comandos ejecutar:

```bash
$ ssh-keygen -t ed25519 -C "[correo electrónico]"
```
```bash
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/user/.ssh/id_ed25519):
```
Aceptar nombre de archivo y ubicación, luego escribir la contraseña a usar
```bash
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Crear el archivo de configuración donde se asignará el `username` con la llave pública
```bash
$ xed ~/.ssh/config
```
Nota: si no cuenta con el editor de texto `xed` puede utilizar el de linea de comandos `nano` o cualquier otro editor

Agregar la siguiente configuración
```
Host 10.3.12.16:2224
User [nombre_usuario]
Hostname 10.3.12.16:2224
IdentityFile ~/.ssh/id_ed25519
```

Ahora el siguiente paso es configurar la cuenta de GitLab con la llave SSH
- Copiar la llave pública de la llave lo puede hacer visualmente abriendo el archivo o bien desde consola con el siguiente comando:

```bash
$ cat ~/.ssh/id_ed25519.pub 
```

    Sintaxis de llave pública
    
    ssh-ed25519 [caracteres] [correo electrónico]
- Menu de su cuenta dar clic en el icono en la parte superior derecha
- Clic en Preferences
- Clic en SSH Keys (menu de la izquierda)
- Pegar la llave en la sección `Key`
- En el `Title` poner el correo electrónico
- En `Expires at` vacio
- Clic `Add Key`

## Requisitos
PHP version 7.0 o superior

Modulos de PHP
- Phalcon (https://phalcon.io/en-us/download/linux)
- Curl (https://www.php.net/curl)
- mbstring

Para comprobar si tiene estos modulos, ejecute el siguiente comando:
```bash
$ php -m | egrep "(phalcon|curl|mbstring)"
curl
mbstring
phalcon
```
Si le aparecen todos los modulos ya estan instalados, si no le aparece alguno verificar que este bien instalado.

## Configurar GIT
`Nota importante: realizar este proceso solamente si es el primer proyecto con el que trabaja con GIT.` 

- Para configurar su usuario en las variables globales de Git y de ese modo se utilice a partir de ese momento en cualquier otro proyecto Git.
Ejecutar los siguientes comandos en consola:
```bash
$ git config --global user.mail "[correo electrónico]"
```
```bash
$ git config --global user.name "[nombre_usuario]"
```


- Si desea automatizar el comando `Push` para cuando necesite subir los cambios a la misma rama pero en Origin (servidor Git)

Ejemplo si se encuentra en la rama `developer`:
```
$ git push origin developer
```
Este comando va a subir de la rama `developer local` a `developer servidor`

Entonces solo necesita escribir
```
$ git push
```
Para lograr esta simplificación ejecutar en consola el siguiente comando:
```bash
$ git config --global push.default current
```
Si lo que se desea es enviar la rama actual a otra diferente en ese caso si es necesario especificar las ramas

## Clonar API

Para descargar el repositorio ejecutar los siguientes comandos:
```bash
$ cd /var/www/php70
```
```bash
$ git clone ssh://git@10.3.12.16:2224/csweb/dashboard-analitica-api.git
```
```bash
$ cd dashboard-analitica-api
```
Nota: Reemplazar `/var/www/php70` por el directorio donde desee clonar el repositorio

## Configurar API
Ejecutar el comando:
```bash
$ git branch
* main
```

Si el resultado es igual al anterior, significa que solo existe la rama principal `main`, necesita crear localmente las otras dos ramas, pero primero descargaremos el código de esta rama con el comando: 
```bash
$ git pull
```

Ahora si, creamos la rama `bugfixes` ejecutando los siguiente comando:
```bash
$ git checkout bugfixes
Cambiado a nueva rama 'bugfixes'
```
Seguimos con la rama `developer` que es la rama donde vamos a trabajar principalmente
```bash
$ git checkout developer
Cambiado a rama 'developer'
```

Ahora se encuentra en la rama `developer`.

 Ejecutar el siguiente comando para configurar todo automáticamente:
```bash
$ php setup
```

Este comando hace lo siguiente:
- Crea el archivo `config.php`
- Crea la carpeta `cache`
- Instala Composer y las dependencias necesarias.

Notese que se crearon los archivos `composer.phar`, `composer.lock` y la carpeta `vendor` que es donde se guardan las dependencias, conserve estos archivos.


## Uso básico de  GIT

Para aprender los comandos básicos de Git puede consultar el siguiente enlace:
https://gist.github.com/dasdo/9ff71c5c0efa037441b6