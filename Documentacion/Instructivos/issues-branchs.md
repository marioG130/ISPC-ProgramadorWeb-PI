# Issues Branchs

## 1) Identificar la ISSUE

Es necesario que todas las modificaciones al codigo (documentacion, frontend, backend) estén referenciadas a una issue. No se debe trabajar por fuera de las issues. Si no se puede identificar la issue hay dos alternativas: O bien crearla como nueva (si o si referida a una US-User Story existente, con el número de TK siguiente a las ya existentes en esa US) y cuidando de no generar issues duplicadas, o bien consultar en el grupo de WhatsApp.<br/>
Al momento de buscar las issues conviene hacerlo desde la vista del proyecto, empezando por la vista de [User Stories](https://github.com/users/marioG130/projects/4/views/4), y luego ir pasando por el [SPRINT0](https://github.com/users/marioG130/projects/4/views/5), luego el [SPRINT1](https://github.com/users/marioG130/projects/4/views/6) y luego el [SPRINT2](https://github.com/users/marioG130/projects/4/views/7). En todas estas vistas el orden es alfabetico (las US están ordenadas y las TK también), lo que facilita la búsqueda.

## 2) Ingresar a la issue elgida

Para ello hacer click en la issue del proyecto, ahi muestra un resumen, ir al link de la derecha "Open in new tab" y abrirá la issue completa en una nueva pestaña. En la issue, en el panel lateral, en "Development" hacer click en "Create a branch". Ahi propone un nombre automático, por ejemplo **Branch name = 56-tk03-2-estructura-general**, si se lo modifica no tocar la primera parte (el numero de issue para GitHub y el numero de issue para nosotros). Luego en **Repo destination = marioG130/ISPC-ProgramadorWeb-PI**, y apretar "Change branch source" y seleccionar en "Branch source" a **develop**. Luego hacer click en **[x] Checkout locally**, y finalmente apretar el botón "Create branch". En ese momento se habrá creado una nueva rama para hacer los cambios deseados.

## 3) Trabajar sobre la rama

A continuación se describen los comandos para trabajar en consola local en nuestras computadoras. Cuando se empieza a trabajar en la issue es importante estar ubicados en la rama de desarrollo "develop" y hacer un **pull** antes de pasarse a la rama particular. Si se vuelve a trabajar otro dia en el mismo tema, antes de subir los cambios, igualmente conviene volver a traer la "develop" por las dudas otro compañero haya hecho cambios que afecten en lo que estoy trabajando.

    $ cd <al directorio base donde se ubica el repo local>
    $ git checkout develop
    $ git pull
    $ git status
        En la rama develop
        Tu rama está actualizada con 'origin/develop'.
        nada para hacer commit, el árbol de trabajo está limpio

En lo que sigue se usa el ejemplo de la tarea "56-tk03-2-.....", eso será diferente en cada caso, igualmente verificar siempre que se está trabajando sobre la issue correcta (en base al número de la tknn), ya que en algún momento pueden haber varias ramas particulares que estén activas.

    $ git fetch origin
    $ git branch
        * develop
        56-tk03-2-estructura-general

    $ git checkout 56-tk03-2-estructura-general
        Rama '56-tk03-2-estructura-general' configurada para hacer seguimiento a la rama remota '56-tk03-2-estructura-general' de 'origin'.
        Cambiado a nueva rama '56-tk03-2-estructura-general'

    $ git status
        En la rama 56-tk03-2-estructura-general
        Tu rama está actualizada con 'origin/56-tk03-2-estructura-general'.
        nada para hacer commit, el árbol de trabajo está limpio

    $ git branch
        * 56-tk03-2-estructura-general
        develop

Se hacen todos los cambios deseados en los archivos:

    $ git add ....     <-- para agregar archivos modificados
    $ git rm ....      <-- para borrar archivos
    $ git mv ....      <-- para cambiar de lugar archivos
    $ git add -A       <-- incorpora modif., agregados, borrados
    $ git status
         Cambios a ser confirmados:
         ....... verificar que todo esté bien
    $ git commit -m '... mensaje ....'

Se suben los cambios al repo (se puede subir mas de un commit)

    $ git push -u origin 56-tk03-2-estructura-general 
        Username for 'https://github.com': ...........
        Password for 'https://......@github.com':  ... PAT(Personal Access Token) ....

Para ver como generar ese token PAT ver https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

## 4) Incorporar estos cambios en rama "develop"

En este momento, los cambios que se hicieron solamente están en esa rama '56-tk03-2-.....'. Para que pasen a la rama "develop" es necesario que se haga un pull-request. Para ello, entar al [repo en Github](https://github.com/marioG130/ISPC-ProgramadorWeb-PI) al enlace donde está la [cantidad de branchs](https://github.com/marioG130/ISPC-ProgramadorWeb-PI/branches), y debe aparecer la rama particular (aparece dos veces, como una rama del usuario y como una rama activa). Apretar el botón "New pull request" en cualquiera de esas dos. Nos pasará a una pantalla donde el título es lo mismo que pusimos en el commit (se puede editar, pero mejor dejarlo asi), se pueden agregar comentarios a este pull-request, y apretar el botón "Create pull request".

Entar al [repo en Github](https://github.com/marioG130/ISPC-ProgramadorWeb-PI) al tercer enlace superior "Pull requests". Debe aparecer este nuevo "pull request" con el título del commit, entrar al mismo. Debe verse el mensaje **"This branch has no conflicts with the base branch"** (sino consultar al grupo). Si todo esta bien, desplegar el botoncito de la derecha de "Merge pull request" y seleccionar la segunda opción **"Squash and merge"**, y luego apretar ese botón "Squash and merge". Luego el boton **"Confirm squash and merge"**, y debe terminar con el mensaje "Pull request successfully merged and closed".

El pull request fue cerrado, se pueden ver todos los [pull request cerrados](https://github.com/marioG130/ISPC-ProgramadorWeb-PI/pulls?q=is:pr+is:closed). En esa vista se pueden ver las "linked issue" en la columna "Reviews", y si se va a esa issue, en "Development" se ve el pull-request con su nombre. La issue donde se estuvo trabajando puede dejarse abierta o cerrarse con "Close issue" (en otro momento se le puede hacer un "Reopen"). En el proyecto Kanban la issue sigue estando tal cual estaba, no hay cambios en labels ni status de la issue del proyecto.

Para verificar que todo esté bien, entar al [repo en Github](https://github.com/marioG130/ISPC-ProgramadorWeb-PI) al enlace donde está la [cantidad de commits](https://github.com/marioG130/ISPC-ProgramadorWeb-PI/commits/main) y verificar que con mi usuario aparezcan 1 commit con el comentario que puse en el commit.

Finalmente, la rama que usé se puede opcionalmente borrar (si no voy a trabajar mas en esa issue). Para hacerlo, ir al enlace de las [ramas](https://github.com/marioG130/ISPC-ProgramadorWeb-PI/branches) y apretar el ultimo iconito de Trash. Alternativamente, se puede entrar en el pull-request (cerrado) que corresponde y apretar el botón "Delete branch". En el repo local (en nuestra computadora) esa rama todavía existe, si se quiere borrar hay que hacer un "git branch -d nnnnn".


## 5) Hacer el merge con la rama principal "main"

Para esto hay que hacer un nuevo pull-request para la incorporación de cambios de "develop" a "main". Esto se hará solamente al momento de finalizar los SPRINTs.
La rama "main" esta protegida y requiere al menos que otros 3 integrantes del grupo (diferentes del que hizo el pull-request) hagan un review del código en el enlace "View reviewed changes" del pull-request.

Entar al [repo en Github](https://github.com/marioG130/ISPC-ProgramadorWeb-PI) al tercer enlace superior "Pull requests". Debe aparecer este nuevo "pull request" con el título del commit, entrar al mismo. Debe verse el mensaje **"This branch has no conflicts with the base branch"** (sino consultar al grupo). Si todo esta bien apretar el botón "Merge pull request". Luego el boton "Confirm merge", y debe terminar con el mensaje "Pull request successfully merged and closed".


## 6) Volver a la rama "develop" y actualizarla en local

Al final, para que nos quede todo bien en nuestra computadora local:

    $ cd <al directorio base donde se ubica el repo>
    $ git checkout develop
    $ git pull                <-- debe traer el ultimo commit que hice
    $ git status

Opcionalmente puede convenir borrar las ramas de trabajo local (que ya no se van a usar). Por ejemplo, a continuación hay dos ramas extras en local que ya fueron subidas anteriomente, ahora se borran, y al final solo queda activa la rama "develop":

    $ git branch
        43-tk13-3-modelo-bbdd-para-el-historial-de-usuario
        56-tk03-2-estructura-general-del-sitio
        * develop
    $ git branch -d 43-tk13-3-modelo-bbdd-para-el-historial-de-usuario
    $ git branch -d 56-tk03-2-estructura-general-del-sitio
    $ git branch
        * develop

