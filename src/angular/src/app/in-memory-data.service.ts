import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Autor } from './autor';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const autores = [
      { id: 1, nome: 'J. R. R. Tolkien', dataDeNascimento: "1892-1-3", nacionalidade: "Inglaterra" },
      { id: 2, nome: 'J. K. Rowling', dataDeNascimento: "1965-7-31", nacionalidade: "Inglaterra" },
      { id: 3, nome: 'George R. R. Martin', dataDeNascimento: "1948-9-20", nacionalidade: "EUA" }
    ];

    const livros = [
      { 
        id: 1, 
        nome: 'A Sociedade do Anel', 
        anoDePublicacao: "1954", 
        autor: autores[0], 
        descricao: "Este livro leva-nos para um mundo onde anéis forjados por anões reinam com o seu poder. No entanto, há um anel que é o mais poderoso de todos e, se cair em mãos erradas, pode ter um poder destrutivo. É o que, infelizmente acontece. Mas depois, este perde-se e passado algum tempo, vai parar às mãos de um hobbit chamado Frodo Bolseiro e, este, ao não saber o que fazer com ele, decide consultar um amigo feiticeiro de nome Gandalf, o Cinzento. Fica decidido ir à bela cidade élfica de Valfenda para fazer um conselho, ministrado pelo sábio Elrond, que determinará quem vai à terra sombria de Mordor e destruir lá, na Montanha da Perdição, o Anel, o único lugar em que tal artefato pode ser destruído. São escolhido o hobbit e mais oito companheiros para realizar tal perigosa missão: os também hobbits Samwise \"Sam\" Gamgi (fiel companheiro de Frodo), Meriadoc \"Merry\" Brandebuque e Peregrin \"Pippin\" Tûk (representando os hobbits), o mago Gandalf (representando a ordem mágica dos Istari), os humanos Aragorn e Boromir (representando os homens), o elfo Legolas (representando os elfos) e o anão Gimli (representando os anões)." 
      },
      { 
        id: 2, 
        nome: 'As Duas Torres', 
        anoDePublicacao: "1954", 
        autor: autores[0], 
        descricao: "Narra a continuação da história desde o rompimento da Sociedade do Anel. O título do livro trata das Torres de Orthanc (Isengard) e Minas Morgul." 
      },
      { 
        id: 3, 
        nome: 'O Retorno do Rei', 
        anoDePublicacao: "1955", 
        autor: autores[0], 
        descricao: "Frodo e Sam continuam sua periogosa jornada rumo a Montanha da Perdição. Desde a separação da Sociedade do Anel Frodo e Sam são guiados por Gollum, capturado em Emyn Muil. Depois de atravessarem os [Emyn Muil]], os Pântanos Mortos, finalmente chegaram no Portão Negro. Depois que Gollum impediu a entrada dos dois amigos, partiram para Ithilien." 
      },
      {
        id: 4,
        nome: "Harry Potter e a Pedra Filosofal",
        anoDePublicacao: "1997",
        autor: autores[1],
        descricao: "Harry Potter e a Pedra Filosofal é o primeiro livro dos sete volumes da série de fantasia Harry Potter, tanto em termos cronológicos como em ordem de publicação, da autora inglesa J. K. Rowling."
      },
      {
        id: 5,
        nome: "Harry Potter e a Câmara Secreta",
        anoDePublicacao: "1998",
        autor: autores[1],
        descricao: "Harry Potter and the Chamber of Secrets é o segundo livro dos sete volumes da série de fantasia Harry Potter, tanto em termos cronológicos como em ordem de publicação, da autora inglesa J. K. Rowling. Foi primeiramente publicado no Reino Unido pela editora londrina Bloomsbury em 1998."
      },
      {
        id: 6,
        nome: "Harry Potter e o Prisioneiro de Azkaban",
        anoDePublicacao: "1999",
        autor: autores[1],
        descricao: "Harry Potter e o Prisioneiro de Azkaban é o terceiro livro dos sete volumes da série de fantasia Harry Potter, tanto em termos cronológicos como em ordem de publicação, da autora inglesa J. K. Rowling. Foi primeiramente publicado no Reino Unido pela editora londrina Bloomsbury em 1999."
      },
      {
        id: 7,
        nome: "A Guerra dos Tronos",
        anoDePublicacao: "1996",
        autor: autores[2],
        descricao: "A Game of Thrones é o primeiro livro da série de fantasia épica As Crônicas de Gelo e Fogo, escrita pelo norte-americano George R. R. Martin e publicada pela editora Bantam Spectra."
      },
      {
        id: 8,
        nome: "A Fúria dos Reis",
        anoDePublicacao: "1998",
        autor: autores[2],
        descricao: "A Clash of Kings é o segundo livro da série de fantasia épica As Crônicas de Gelo e Fogo, escrita pelo norte-americano George R. R. Martin e publicada pela editora Bantam Spectra. Foi publicado pela primeira vez em 16 de novembro de 1998 no Reino Unido, sendo lançado nos Estados Unidos em março de 1999."
      },
      {
        id: 9,
        nome: "A Tormenta de Espadas",
        anoDePublicacao: "2005",
        autor: autores[2],
        descricao: "Festim dos Corvos é o quarto livro da série de fantasia épica As Crônicas de Gelo e Fogo, escrita pelo norte-americano George R. R. Martin e publicada pela editora Bantam Spectra. Foi lançado em 17 de outubro de 2005 na Grã-Bretanha e em 8 de novembro do mesmo ano nos Estados Unidos."
      }
    ];

    return { autores, livros };
  }

  genId(livros: Livro[]): number {
    return livros.length > 0 ? Math.max(...livros.map(livro => livro.id)) + 1 : 1;
  }
}