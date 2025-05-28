document.getElementById('btnDownload').addEventListener('click', async () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Relatório Técnico - Pneumática & Segurança', 20, 20);

    doc.setFontSize(13);
    doc.text('O que é Pneumática?', 20, 35);
    doc.setFontSize(11);
    doc.text(
        'Pneumática é a tecnologia que utiliza o ar comprimido para movimentar e controlar máquinas e equipamentos.\n' +
        'É amplamente empregada na indústria devido à sua eficiência, segurança e facilidade de manutenção.',
        20, 43, { maxWidth: 170 }
    );

    doc.setFontSize(13);
    doc.text('Dicas para ser um Profissional Seguro:', 20, 65);
    doc.setFontSize(11);
    const dicas = [
        '1. Sempre utilize EPIs adequados (óculos, luvas, protetor auricular).',
        '2. Antes de operar sistemas pneumáticos, verifique vazamentos e conexões.',
        '3. Nunca direcione jatos de ar comprimido para si ou para outros.',
        '4. Mantenha o ambiente de trabalho limpo e organizado.',
        '5. Siga os procedimentos de bloqueio e etiquetagem antes de manutenções.',
        '6. Participe de treinamentos e atualize-se sobre normas de segurança.',
        '7. Em caso de dúvida, consulte o supervisor ou manual técnico.'
    ];
    let y = 73;
    dicas.forEach(dica => {
        doc.text(dica, 22, y);
        y += 8;
    });

    doc.setFontSize(12);
    doc.setTextColor(25, 118, 210);
    doc.text('Profissional seguro é referência na equipe!', 20, y + 10);

    doc.save('relatorio_pneumatica_seguranca.pdf');
});
