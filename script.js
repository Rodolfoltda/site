function openContractWindow() {
    const landlordName = document.getElementById('landlordName').value;
    const landlordCPF = document.getElementById('landlordCPF').value;
    const landlordMaritalStatus = document.getElementById('landlordMaritalStatus').value;
    const landlordProfession = document.getElementById('landlordProfession').value;
    const landlordNumber = document.getElementById('landlordNumber').value;
    const landlordEmail = document.getElementById('email').value;
    const tenantName = document.getElementById('tenantName').value;
    const tenantCPF = document.getElementById('tenantCPF').value;
    const tenantAddress = document.getElementById('tenantAddress').value;
    const propertyAddress = document.getElementById('propertyAddress').value;
    const leaseStartDate = new Date(document.getElementById('leaseStartDate').value).toLocaleDateString('pt-BR');
    const leaseEndDate = new Date(document.getElementById('leaseEndDate').value).toLocaleDateString('pt-BR');
    const rentAmount = document.getElementById('rentAmount').value;
    const location = document.getElementById('location').value;
    const date = new Date(document.getElementById('date').value).toLocaleDateString('pt-BR');
    const contractContent = `
        <h2>Contrato de Locação Residencial</h2>
        <p>Locador: ${landlordName}&nbsp;&nbsp;&nbsp;&nbsp;CPF do Locador: ${landlordCPF}</p>
        <p>Estado Civil do Locador: ${landlordMaritalStatus}&nbsp;&nbsp;&nbsp;&nbsp;Profissão do Locador: ${landlordProfession}</p>
        <p>Celular: ${landlordNumber}&nbsp;&nbsp;&nbsp;&nbsp;Email: ${landlordEmail}</p>
        <p>Locatário: ${tenantName}&nbsp;&nbsp;&nbsp;&nbsp;CPF do Locatário: ${tenantCPF}</p>
        <p>Endereço do Locatário: ${tenantAddress}</p>
        <p>Imóvel: ${propertyAddress}</p>
        <p>Valor do Aluguel: R$ ${rentAmount}&nbsp;&nbsp;&nbsp;&nbsp;Data de Início: ${leaseStartDate}&nbsp;&nbsp;&nbsp;&nbsp;Data de Término: ${leaseEndDate}</p>
        <h3>Cláusulas</h3>
        <p>CLÁUSULA PRIMEIRA: O objeto da presente locação é o imóvel situado na ${propertyAddress}.</p>
        <p>CLÁUSULA SEGUNDA: O prazo da locação é de 30 (trinta) meses, iniciando-se em ${leaseStartDate} e a terminar em ${leaseEndDate}, independentemente de aviso, notificação ou interpelação judicial ou mesmo extrajudicial.</p>
        <p>CLÁUSULA TERCEIRA: O aluguel mensal, deverá ser pago até o dia 10 (dez) do mês subseqüente ao vencido, no local indicado pelo LOCADOR, é de R$ ${rentAmount} mensais, reajustados anualmente, de conformidade com a variação do IGP-M apurada no ano anterior, e na sua falta, por outro índice criado pelo Governo Federal e, ainda, em sua substituição, pela Fundação Getúlio Vargas, reajustamento este sempre incidente e calculado sobre o último aluguel pago no último mês do ano anterior.</p>
        <p>CLÁUSULA QUARTA: O LOCATÁRIO pagará todas as despesas com ligação e consumo de luz, força, água e gás que serão pagas diretamente às empresas concessionárias dos referidos serviços.</p>
        <p>CLÁUSULA QUINTA: Em caso de mora no pagamento do aluguel, aplicar-se-á uma multa de 2% (dois por cento) sobre o valor devido e juros mensais de 1% (um por cento) do montante devido.</p>
        <p>CLÁUSULA SEXTA: Fica convencionado ainda pelos contratantes que o pagamento da multa não significa a renúncia de qualquer direito ou aceitação da emenda judicial da mora, em caso de qualquer procedimento judicial contra o LOCATÁRIO.</p>
        <p>CLÁUSULA SÉTIMA: As obras e despesas com a conservação, limpeza e asseio do imóvel correrão por conta, risco e ônus do LOCATÁRIO, ficando este obrigado a devolver o imóvel em perfeitas condições de limpeza, asseio, conservação e pintura, quando finda ou rescindida esta avença, sem qualquer responsabilidade pecuniária para o LOCADOR. O LOCATÁRIO não poderá realizar obras de vulto e nem modificar a estrutura do imóvel ora locado, sem prévia autorização por escrito da LOCADORA. Caso este consinta na realização das obras, estas ficarão desde logo, incorporadas ao imóvel, sem que assista ao LOCATÁRIO qualquer indenização pelas obras ou retenção por benfeitorias. As benfeitorias removíveis poderão ser retiradas, desde que não desfigurem o imóvel locado.</p>
        <p>PARÁGRAFO ÚNICO: O LOCATÁRIO declara receber o imóvel em perfeito estado de conservação e limpeza, mobiliado, com pintura nova, fechaduras, vidros, parte elétrica e hidráulica e tudo mais e perfeito funcionamento.</p>
        <p>CLÁUSULA OITAVA: O LOCATÁRIO declara, que o imóvel ora locado, destina-se única e exclusivamente para o seu uso residencial e de sua família.</p>
        <p>CLÁUSULA NONA: O LOCATÁRIO não poderá sublocar, transferir ou ceder o imóvel, sendo nulo de pleno direito qualquer ato praticado com este fim sem o consentimento prévio e por escrito do LOCADOR.</p>
        <p>CLÁUSULA DÉCIMA: Em caso de sinistro parcial ou total do prédio, que torne inabitável o imóvel locado, o presente contrato ficará rescindido, de pleno direito, independentemente de aviso ou interpelação judicial ou extrajudicial; no caso de incêndio parcial, obrigando a obras de reconstrução, o presente contrato terá suspensa a sua vigência e reduzida a renda do imóvel durante o período da reconstrução à metade do que na época for o aluguel, e sendo após a reconstrução devolvido o LOCATÁRIO pelo prazo restante do contrato, que ficará prorrogado pelo mesmo tempo de duração das obras de reconstrução.</p>
        <p>CLÁUSULA DÉCIMA PRIMEIRA: Em caso de desapropriação total ou parcial do imóvel locado, ficará rescindido de pleno direito o presente contrato de locação, independente de quaisquer indenizações de ambas as partes ou contratantes.</p>
        <p>CLÁUSULA DÉCIMA SEGUNDA: No caso de alienação do imóvel, obriga-se o LOCADOR, dar preferência ao LOCATÁRIO, e se o mesmo não utilizar-se dessa prerrogativa, o LOCADOR deverá constar da respectiva escritura pública, a existência do presente contrato, para que o adquirente o respeite nos termos da legislação vigente.</p>
        <p>CLÁUSULA DÉCIMA TERCEIRA: Ao LOCADOR é facultado, por si ou seus procuradores, vistoriar o imóvel, sempre que achar conveniente, para certeza do cumprimento das obrigações assumidas neste contrato.</p>
        <p>CLÁUSULA DÉCIMA QUARTA: Cabe ao LOCATÁRIO, o cumprimento, dentro dos prazos legais, de quaisquer multas ou intimações por infrações das leis, portarias ou regulamentos vigentes, originários de quaisquer repartições ou entidades. Obriga-se ainda, a entregar ao LOCADOR, dentro de prazos que permita o seu cumprimento, aviso ou notificação de interesse do imóvel, sob pena de, não o fazendo, assumir integral responsabilidade pela falta.</p>
        <p>CLÁUSULA DÉCIMA QUINTA: A infração de qualquer das cláusulas do presente contrato, sujeita o infrator à multa de duas vezes o valor do aluguel, tomando-se por base, o último aluguel vencido, cobrável ou não por ação executiva, sem prejuízo da rescisão imediata deste contrato, além do pagamento de todas as despesas por procedimentos judiciais e outras sanções que o caso indicar.</p>
        <h3>Assinaturas</h3>
        <p>Local: ${location}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data: ${date}</p>
        <br><br>
            <div style="display: flex; justify-content: space-between;">
            <p>___________________________<br>Assinatura do Locatário</p>
            <p>___________________________<br>Assinatura do Locador</p>
        </div>
        <button id="printButton" onclick="window.print()">Imprimir</button>
    `;

    const contractWindow = window.open("", "_blank");
    contractWindow.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contrato de Aluguel</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 10px; margin: 1.5cm; } /* Margens conforme ABNT */
                h2 { text-align: center; font-size: 14pt; } /* Tamanho de fonte conforme ABNT */
                h3 { text-align: center; font-size: 14pt; } /* Tamanho de fonte conforme ABNT */
                p { margin: 10px 0; text-align: justify; font-size: 12pt; } /* Tamanho de fonte conforme ABNT */
                button { margin-top: 20px; padding: 10px; background-color: #007BFF; color: white; border: none; cursor: pointer; }
                button:hover { background-color: #0056b3; }

               
            </style>
        </head>
        <body>
            ${contractContent}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>
        </body>
        </html>
    `);
    contractWindow.document.close();
      // Adicionar a função generatePDF na janela aberta
      contractWindow.generatePDF = function() {
        const { jsPDF } = contractWindow.jspdf;
        const doc = new jsPDF();
        const contractElement = contractWindow.document.body.cloneNode(true);
        contractElement.querySelector('#generatePDFButton').remove();
        contractElement.querySelector('#printButton').remove();
        const contractText = contractElement.innerText;
        doc.setFontSize(12); /* Tamanho de fonte conforme ABNT */
        doc.text(contractText, 20, 30); /* Margem inicial conforme ABNT */
        doc.output('dataurlnewwindow'); // Abre o PDF em uma nova janela

        // Apagar o texto dos botões após gerar o PDF
        contractWindow.document.getElementById('generatePDFButton').innerText = '';
        contractWindow.document.getElementById('printButton').innerText = '';
               
    };

}