# CONTEXT

Abordagens

### CALLBACKS

Situações onde se passa uma função como parâmetro de outra função no js
É possível fazer isso usando states dentro do react, passado pelas props
EX: em ClientForm.jsx

##### PROBLEMA DE FAZER A GESTÃO DE ESTADOS USANDO O CALLBACK

Nos casos em que existe um state muito importante para toda a aplicação, exemplo, o nome do usuário logado, name, etc. Terá que fazer várias callbacks, criando um Prop drilling que é quando os dados são passados de um componente para vários outros que necessitam dos mesmos dados. Prejudicando a performace da aplicação e a usabilidade do código
