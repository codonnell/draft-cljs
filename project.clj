(defproject draft-cljs "0.1.0-SNAPSHOT"
  :description "A draft calculator for utopia."
  :url "http://utopia-game.com"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [compojure "1.1.5"]
                 [domina "1.0.2-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "0.3.2"]
            [lein-ring "0.8.5"]]
  :source-paths ["src/clj"]
  :cljsbuild { 
    :builds {
      ;; :main {
      ;;   :source-paths ["src/cljs"]
      ;;   :compiler {:output-to "resources/public/js/calculator_dbg.js"
      ;;              :optimizations :simple
      ;;              :pretty-print true}}
      :prod {
        :source-paths ["src/cljs" ]
        :compiler {:output-to "resources/public/js/calculator.js"
                   :optimizations :advanced
                   :pretty-print true}}
             }}
  :ring {:handler draft-cljs.server/handler})

