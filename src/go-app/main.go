package main

import (
	"github.com/pigmon/go-app/route"

	config "github.com/pigmon/go-app/conf"

	"github.com/sirupsen/logrus"
)

func main() {
	router := route.Init()
	router.Start(":" + config.Config.Port)

}
func init() {

	logrus.SetLevel(logrus.DebugLevel)
	logrus.SetFormatter(&logrus.JSONFormatter{})
}
