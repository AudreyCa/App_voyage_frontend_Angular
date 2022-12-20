import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  urlApi = 'http://localhost:8080/upload'

  public uploader : FileUploader = new FileUploader({
    url: this.urlApi,
    itemAlias: 'document'
  })

  constructor( private _http: HttpClient ) {}

  ngOnInit () {

    console.log(this.uploader);

    this.uploader.onAfterAddingFile = (fichier:any) => {
      alert('Fichier ajouté')
    }

    this.uploader.onCompleteItem = (fichier:any) => {
      alert('Fichier correctement envoyé')
    }

  }

  onDownloadFile(url:string):any {
    const headers = new HttpHeaders();

    this._http.get(url, {headers, responseType: 'blob' as 'json'}).subscribe((response:any)=>{
      let dataType = response.type

      // On crée un tableau pour y stocker (et donc push) les info reçues.
      let binaryData = [];
      binaryData.push(response);

      let downloadLink = document.createElement('a');

      downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type:dataType}))
      downloadLink.setAttribute('download', 'testDownload')
      downloadLink.setAttribute('target', '__blank')

      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();

    })
  }


}
