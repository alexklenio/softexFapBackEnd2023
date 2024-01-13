# Atividade

Aplique o padrão de projeto Observer para criar um simples editor de texto. Considere a solução apresentada no Hipertexto 6 e utilize o código visto para implementar novas classes. Os requisitos para avaliar o projeto são:

- implementar uma subclasse da classe Editor chamada TextEditor,

- aplicar o método insertLine, que recebe os parâmetros lineNumber e text,

- inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;

- aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário;

- instanciar um TextEditor e disparar o evento "open";

- receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto "EOF", que não deve ser inserido no objeto textEditor;

- por fim, o textEditor deve disparar o evento "save" para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela.


**Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

## Resposta:


``` TypeScript

abstract class Editor {
  public lines: string[] = [];

  public insertLine(lineNumber: number, text: string): void {
    if (lineNumber < 0 || lineNumber >= this.lines.length) {
      throw new Error("Linha inválida");
    }

    this.lines.splice(lineNumber, 0, text);

    this.notifyObservers();
  }

  public removeLine(lineNumber: number): void {
    if (lineNumber < 0 || lineNumber >= this.lines.length) {
      throw new Error("Linha inválida");
    }

    this.lines.splice(lineNumber, 1);

    this.notifyObservers();
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  protected notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

class TextEditor extends Editor {
  public open(): void {
    this.notifyObservers("open");
  }

  public receiveLines(lines: string[]): void {
    for (const line of lines) {
      if (line !== "EOF") {
        this.insertLine(this.lines.length, line);
      }
    }
  }

  public save(): void {
    // TODO: implementar o salvamento do conteúdo do editor em um arquivo
  }
}

interface Observer {
  update(): void;
}

class TextEditorObserver implements Observer {
  public update(): void {
    console.log(this.editor.lines.join("\n"));
  }

  constructor(public editor: TextEditor) {}
}

const editor = new TextEditor();

const observer = new TextEditorObserver(editor);

editor.addObserver(observer);

while (true) {
  const line = prompt("Digite uma linha de texto: ");

  if (line === "EOF") {
    break;
  }

  editor.insertLine(editor.lines.length, line);
}

```