package models

import (
	"gorm.io/gorm"
	"gorm.io/driver/mysql"
)

 var DB *gorm.DB

 func ConnectDatase() {
	database, err := gorm.Open(mysql.Open("root:@tcp(localhost:3306)/my_desa"))
	if err != nil {
		panic(err)
	}

	database.AutoMigrate(&Schema{})

	DB = database
 }