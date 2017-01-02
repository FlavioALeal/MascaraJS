# Máscara para Campos Numéricos
Mascara em JavaScript para campos de formulários numéricos, facilmente configurável. O arquivo **mascara.mim.js** tem menos de 1 kb!

## Como usar em meu projeto?
* Basta fazer o donwload ou clone deste repositório para o seu projeto.
* Inclua o arquivo **mascara.mim.js** no seu HTML

```
<script src="mascara.min.js"></script>
```

## Como criar as Mascaras?
É muito simples, coloque o caracter **#** (hashtag ou jogo da velha) no local em que você deseja que apareçam os números.
Por exemplo, você quer criar uma máscara para o campo CPF, que tem este formato **123.456.789-00** a mascara para um campo CPF será **###.###.###-##**
Ao digitar os números do CPF os **caracteres numéricos** vão ser incluídos no lugar dos caractéres **#** da mascara. Qualquer outro caracter como . (ponto) , (vigula) - (hifém) e outros serão incluídos no número digitado exatamente na mesma posição em que aparecem na máscara.


## Como incluir a máscara no meu campo de formulário?
Você precisa colocar uma chamada a função **mascara** no método **onkeyup** do seu input.

**Exemplo:**
```
onkeyup="mascara('###.###.###-##',this,event,true)"
```

**Exemplo completo input:**
```
<input class="form-control" type="text" id="cpf" placeholder="###.###.###-##" onkeyup="mascara('###.###.###-##',this,event,true)" maxlength="14">
```

## Parametros da função mascara
A função máscara tem 4 parametros.
* 1º - o Modelo da máscara utilizado no input, como explicado acima, informe sempre a máscara entre aspas simples ou aspas duplas, **parametro obrigatório**
* 2º - não mude, sempre deve ser **this**, **parametro obrigatório**
* 3º - não mude, sempre deve ser **event**, **parametro obrigatório**
* 4º - este parametro quando informado com o valor **true** a função validará o números informados alterando a cor do input enquanto o usuário digita os números e quando o input é completamente preenchido, quando o valor informado for **false** ou simplesmente não informado nenhum valor, a cor do input não será alterada, **parametro opcional**

### Outros Exemplos
Para ver exemplos reais, abra o arquivo **index.html** após o donwload/clone.
Caso esteja usando Internet Explorer acessando o arquivo no seu computador local, lembre-se de permitir a execução do script no aviso que aparecerá ao abrir a página.

### Como alterar as cores de validação?
Abra o arquivo **mascara.mim.js**, no fim do arquivo edite as variáveis **corCompleta** e **corIncompleta** para as cores desejadas.