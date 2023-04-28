# Clonacion REPO

Se describen a continuación los comandos necesarios para inicializar el en repo grupal, para hacerlo via linea de comandos (otra forma sería hacerlo via VisualStudio). La rama principal "main" está protegida y hacen falta 3 revisiones para que permita hacer un merge de un rama alternativa. Se debe trabajar en "issues" generando ramas particulares por cada tarea.

## 1) Al iniciar el repo (una sola vez)

    $ git config -l
        para verificar que git está instalado y tiene configurado el usuario y email correcto

    $ cd <al directorio base local donde se ubicará el repo>

    $ git clone https://github.com/marioG130/ISPC-ProgramadorWeb-PI.git
    $ cd ISPC-ProgramadorWeb-PI
    $ git branch
        * main
    $ git status
        En la rama main
        Tu rama está actualizada con 'origin/main'.
        nada para hacer commit, el árbol de trabajo está limpio

Para ver las otras ramas remotas:

    $ git branch -a
        * main
        remotes/origin/HEAD -> origin/main
        remotes/origin/develop
        remotes/origin/feature
        remotes/origin/main
