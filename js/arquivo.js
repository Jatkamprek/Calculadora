      function calcular (tipo, valor) {
        if (tipo === 'acao'){

          //limpar visor
          if (valor === 'c') {
            document.getElementById ('resultado').value = ''
          }

          //operações matemáticas
          if (valor === '+' || valor === '-' || valor === '*'|| valor ==='/'|| valor === '.') {
            document.getElementById ('resultado').value += valor
          }

          //resultado
          if ( valor === '=') {
            var calculo_valor = eval (document.getElementById ('resultado').value)
            document.getElementById ('resultado').value = calculo_valor
          }

        } else if (tipo === 'valor'){
            var valor_campo = document.getElementById ('resultado').value
            document.getElementById ('resultado').value = valor_campo + valor

        }

      }
    