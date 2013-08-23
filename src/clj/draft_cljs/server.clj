(ns draft-cljs.server
  (:use compojure.core)
  (:require [ring.adapter.jetty :as jetty]
            [compojure.handler :as handler]
            [compojure.route :as route]))

(defroutes app-routes
  (GET "/" [] "<p>Hello from compojure.</p>")
  ; serves static resources in resources/public
  (route/resources "/")
  (route/not-found "Page not found."))

(def handler
  (handler/site app-routes))
