
export class Collaborator {

 id: number;
 name: string;
 firstname: string;
 email: string;
 comment: string;
 cv: string;
 isProvider: boolean;
 arrivalDateOp: Date;
 leftDateOp: Date;
 fkIdStatus: number;
 deleted: boolean;
 fkIdRole: number;

 constructor(id: number, name: string, firstname: string, email: string, comment: string,
  cv: string, isProvider: boolean, arrivalDateOp: Date, leftDateOp: Date, fkIdStatus: number,
  deleted: boolean, fkIdRole: number) {
  this. id = id;
  this.name = name;
  this.firstname = firstname;
  this.email = email;
  this.comment = comment;
  this.cv = cv;
  this.isProvider = isProvider;
  this.arrivalDateOp = arrivalDateOp;
  this.leftDateOp = leftDateOp;
  this.fkIdStatus = fkIdStatus;
  this.deleted = deleted;
  this.fkIdRole = fkIdRole;
 }
}
