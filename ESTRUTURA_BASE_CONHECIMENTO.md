# Estrutura de Base de Conhecimento

## Páginas Criadas

Todas as páginas da Base de Conhecimento foram criadas em `src/pages/BaseConhecimento/` com a seguinte estrutura:

### Comece por aqui
- `VisaoGeral.jsx` - Visão Geral de Rastreamento
- `Treinamento1.jsx` - Treinamento 1 - básico para funcionar
- `Treinamento2.jsx` - Treinamento 2 - operacional

### Conteúdos adicionais
- `Operacional.jsx` - Operacional
- `TratarAlertas.jsx` - Como tratar alertas
- `CadastrarUsuarios.jsx` - Cadastrar pessoas/usuários
- `Regras.jsx` - Regras
- `IdentificacaoMotorista.jsx` - Identificação de motorista
- `UnidadeOrganizacional.jsx` - Unidade Organizacional
- `CNH.jsx` - CNHs a vencer e vencidas
- `AreasRotas.jsx` - Áreas e rotas geográficas

### Conteúdos avançados
- `JornadaTrabalho.jsx` - Jornada de Trabalho
- `Performance.jsx` - Performance
- `Logistics.jsx` - Logistics
- `Videotelemetria.jsx` - Videotelemetria
- `Manutencao.jsx` - Manutenção
- `Abastecimento.jsx` - Abastecimento
- `GestaoMultas.jsx` - Gestão de Multas
- `Velocidade.jsx` - Velocidade na Via

### Aplicativos
- `SSXMobile.jsx` - SSX Mobile
- `SSXOnboard.jsx` - SSX Onboard

### Conteúdos especiais
- `MacrosOnboard.jsx` - Macros com SSX Onboard

### Relatórios
- `RelatorioGeral.jsx` - Relatório Geral
- `PeriodosBDV.jsx` - Períodos de utilização BDV
- `PeriodosConsolidado.jsx` - Períodos de utilização consolidado
- `RelatorioAlertas.jsx` - Relatório de alertas
- `RelatorioAreas.jsx` - Relatório de passagem por áreas
- `RelatorioMensagens.jsx` - Relatório de mensagens enviadas e recebidas
- `RelatorioManutencoes.jsx` - Relatório de manutenções
- `RelatorioAbastecimentos.jsx` - Relatório de abastecimentos

## Como adicionar conteúdo

Cada página segue o seguinte template:

```jsx
export default function NomeDaPagina() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Título da Página</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    {/* Adicionar conteúdo aqui */}
                    <p className="text-gray-700 mb-4">Seu conteúdo aqui...</p>
                </div>
            </div>
        </div>
    );
}
```

## Rotas Configuradas

Todas as rotas estão configuradas em `src/App.jsx` com o seguinte padrão:
```
/base-conhecimento/{slug-do-item}
```

## Navegação

A navegação principal está em `src/components/BaseConhecimento2.jsx` que exibe todos os itens do menu com links para as respectivas páginas.

## Adicionando novo item ao menu

1. Crie o arquivo `.jsx` em `src/pages/BaseConhecimento/`
2. Importe o componente em `src/App.jsx`
3. Adicione a rota em `src/App.jsx`
4. Adicione o item no objeto `menuItems` em `src/components/BaseConhecimento2.jsx`
