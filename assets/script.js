function showLoading() {
    const loadingModal = document.querySelector('.loading');
    loadingModal.style.display = 'flex';
}

function hideLoading() {
    const loadingModal = document.querySelector('.loading');
    loadingModal.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    showLoading();

    function gerarNumeroAleatorio() {
        const numero = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        console.log(numero);
        return numero;
    }

    const numero = gerarNumeroAleatorio(); // Salva o número gerado em uma variável

    setTimeout(() => {
        hideLoading();
    }, numero); // Usa a variável 'numero' aqui no setTimeout
});


document.addEventListener("DOMContentLoaded", () => {
const steps = document.querySelectorAll(".form-step");
const nextButtons = document.querySelectorAll(".next-btn");
const submitButton = document.querySelector(".submit-btn");
const proposalSummary = document.getElementById("proposal-summary");
const button = document.querySelector(".button");
const text = button.querySelector(".text");
const siteName = document.getElementById("site-name").value;
    const clientName = document.getElementById("client-name").value;
    const attendantName = document.getElementById("attendant-name").value;

let currentStep = 0;
let generatedPDF = null; // Variável para armazenar o PDF gerado

// Função para avançar ao próximo passo
function goToNextStep() {
    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
}

 // Adiciona evento aos botões de 'Seguinte'
    nextButtons.forEach((button) => {
        button.addEventListener("click", () => {
            goToNextStep();
        });
    });

    const generateHTML = (siteName, clientName, attendantName) => {
        // Cria o conteúdo HTML
        const content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Proposta - ${siteName}</title>
        <style>/* Estilo Global */
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 20px;
                background: linear-gradient(135deg, #121212, #1e1e1e);
                color: #f4f4f4;
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }
    
            h1, h2 {
                color: #66ccff;
                text-align: center;
            }
    
            h1 {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
            }
    
            h2 {
                font-size: 1.8rem;
                margin-top: 2rem;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
            }
    
            p {
                font-size: 1.1rem;
                margin-bottom: 1.5rem;
                text-align: justify;
                color: #dcdcdc;
            }
    
            .section {
                margin-bottom: 20px;
                padding: 20px;
                border: 1px solid #333;
                border-radius: 10px;
                background-color: #1e1e1e;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }
    
            ul, ol {
                margin-left: 1.5rem;
                font-size: 1.1rem;
                color: #bfbfbf;
            }
    
            ul li, ol li {
                margin-bottom: 1rem;
            }
    
            ul li strong {
                color: #66ccff;
            }
    
            a {
                color: #66ccff;
                text-decoration: none;
            }
    
            a:hover {
                text-decoration: underline;
            }
    
            footer {
                margin-top: 2rem;
                font-size: 0.9rem;
                text-align: center;
                color: #999;
            }
    
            /* Destaques e Ícones */
            strong {
                color: #ffcc66;
                font-size: 1.2rem;
            }
    
            /* Botões (se aplicável) */
            button {
                background: #66ccff;
                color: #fff;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                transition: background 0.3s ease;
            }
    
            button:hover {
                background: #3399cc;
            }
    
            /* Responsividade */
            @media (max-width: 768px) {
                body {
                    padding: 15px;
                }
    
                h1 {
                    font-size: 2rem;
                }
    
                h2 {
                    font-size: 1.5rem;
                }
    
                p, ul, ol {
                    font-size: 1rem;
                }
            }
        </style>
    </head>
    <body>
        <h1>🌟 Proposta de Criação da(o) ${siteName} 🌟</h1>
        <p>Prezado(a) ${clientName},</p>
        <p>É com grande satisfação que apresentamos nossa proposta para a criação do site do(a) <strong>${siteName}</strong>, especialmente desenvolvido para atender às suas necessidades.</p>
        
        <div class="section">
            <h2>1️⃣ Detalhes do Projeto</h2>
            <ul>
                <li> <strong>💻 Valor do Domínio:</strong> R$ 76,00 (para 2 anos) <br><br> Além do domínio, oferecemos as seguintes funcionalidades adicionais que podem ser incorporadas ao seu site:
<br><br></li>
                <li> <strong>💳 Sistema de Pagamentos Automático:</strong> R$ 125,00 <br><br> Com este sistema, os pagamentos dos seus clientes serão gerados, verificados e confirmados automaticamente, eliminando a necessidade de intervenções manuais.
 <br><br></li>
                <li> <strong>👤 Painel Interativo do Cliente:</strong> R$ 135,50 <br><br> Após a compra, seus clientes terão acesso direto a um painel interativo, que incluirá suporte em chat em tempo real e um histórico de compras, proporcionando uma experiência de atendimento mais ágil e eficiente.
 <br><br></li>
                <li> <strong>🗂 Sistema Interno:</strong> R$ 550,90 <br><br> Este sistema permitirá que você gerencie sua equipe de ajudantes, monitore o funcionamento do site e mantenha o controle do saldo bancário, tudo em um único lugar.

 <br><br></li>
            </ul>
        </div>
        
        <div class="section">
            <h2>2️⃣ Modelo Exclusivo</h2>
            <p>🎨 Como parte do nosso compromisso em garantir a sua satisfação, oferecemos um modelo exclusivo de graça! Este modelo permite que você valide o estilo do site antes de prosseguirmos com o desenvolvimento final.</p>
        </div>
        
        <div class="section">
            <h2>3️⃣ Próximos Passos</h2>
            <ol>
                <li>Validação do Modelo: Após apresentar o modelo exclusivo, aguardamos sua validação.</li>
                <li>Confirmação dos Adicionais: Com a validação do modelo, discutiremos quais funcionalidades adicionais você gostaria de incluir.</li>
                <li>Criação do Site: Iniciaremos o desenvolvimento do site, mantendo você informada sobre o progresso.</li>
            </ol>
        </div>
        
        <p>Estamos animados com a possibilidade de trabalhar com você neste projeto!</p>
        <p><strong>Atenciosamente,</strong><br>${attendantName}<br>📧 services@websmedu.com.br<br>🌐 WebsMedu</p>
    </body>
    </html>
        `;

        // Gera o link com o conteúdo HTML
        const blob = new Blob([content], { type: 'text/html' });
        return URL.createObjectURL(blob);
    };


// Evento de submissão
submitButton.addEventListener("click", () => {
    // Avança para a próxima etapa (resumo)
    goToNextStep();
});

button.addEventListener("click", () => {
    const siteName = document.getElementById("site-name").value;
    const clientName = document.getElementById("client-name").value;
    const attendantName = document.getElementById("attendant-name").value;

    if (siteName && clientName && attendantName) {
        // Gera o link HTML
        const htmlLink = generateHTML(siteName, clientName, attendantName);

        // Copia o link para a área de transferência
        navigator.clipboard.writeText(htmlLink).then(() => {
            button.classList.add("progress");
            text.innerText = "Copiando...";
            setTimeout(() => {
                button.classList.remove("progress");
                text.innerText = "Link Copiado!";
            }, 2000); // Simula a cópia em 2 segundos
        }).catch((err) => {
            alert("Erro ao copiar o link: " + err);
        });
    } else {
        alert("Preencha o formulário antes de copiar o link!");
    }
});
});