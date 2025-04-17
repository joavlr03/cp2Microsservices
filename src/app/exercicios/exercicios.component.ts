import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-exercicios',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './exercicios.component.html',
})
export class ExerciciosExport{
    //exercicio2
    mes: number = 1;

    //exercicios3
    itens = [`maçã,banana,leite`];

    //exercicio 4
    idade = 18;

    //exercicio 5
    listaDeTarefas = [`Estudar Angular,Fazer Exercicios, Revisar Código`];

    //exercicio 6
    status = `pendente`;

    //exercicio 7 
    usuarios = [{nome:`Ana`, idade: `25`}, {nome:`Carlos`, idade: `30`}];

    //exercicio 8
    valor: number | string = 1;
    




    //Objetos
    aumentarIdade(){
        this.idade++;
    }
    diminuirIdade(){
        if(this.idade>0) this.idade--;
    }

    remover(index: number){
        this.listaDeTarefas.splice(index,1);
    }
}