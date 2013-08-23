(ns draft-cljs.calculator
  (:use [domina :only [by-id value set-value!]])
  (:require [clojure.string :as s])
  )

(def draft-table
  {"reserved" 0.003
   "normal" 0.006
   "aggressive" 0.01
   "emergency" 0.015})

(defn calculate []
  (let [form-value (comp value by-id)
        parse-double (comp js/parseFloat #(s/replace % #"[^\d]" ""))
        ;; parse-double js/parseFloat
        total-pop (parse-double (form-value "total_pop"))        
        mil-pop (parse-double (form-value "mil_pop"))        
        pes-pop (parse-double (form-value "pes_pop"))        
        wiz-pop (parse-double (form-value "wiz_pop"))        
        patriotism (form-value "patriotism")
        target-draft (form-value "target_draft")
        draft-rate (* (if patriotism 1.3 1.0) 
                      (draft-table (form-value "draft_rate")))          
        sols-needed (- (* total-pop (/ target-draft 100)) mil-pop)
        desired-peasants (- pes-pop sols-needed)
        peasant-decay (- (dec draft-rate))
        hours (/ (Math/log (/ desired-peasants pes-pop)) (Math/log peasant-decay))
        ]
    (set-value! (by-id "hours") (Math/ceil hours))
    false))

(defn ^:export init 
  "Binds form submission to the calculate function."
  []
  (if (and js/document
           (.-getElementById js/document))
    (let [theForm (.getElementById js/document "draftForm")]
      (.log js/console theForm)
      (set! (.-onsubmit theForm) calculate))))
