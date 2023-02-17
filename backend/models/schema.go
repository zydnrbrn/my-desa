package models

type Schema struct {
	 Id int64 "gorm:'primaryKey' json:'id'"
	 NamaProduct string "type:'varchar(300)' json:'nama_product'"
	 Deskripsi string "type:'tetx' json:'deskripsi'"
}