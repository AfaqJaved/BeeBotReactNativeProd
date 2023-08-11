export const LESSON_HTML =
`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>file_1691648371491</title>
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
        text-indent: 0;
      }
      h3 {
        color: #fff;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 12pt;
      }
      h1 {
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 30pt;
      }
      h2 {
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 14pt;
      }
      p {
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
        margin: 0pt;
      }
      h4 {
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      .s1 {
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      .s2 {
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l1 {
        padding-left: 0pt;
        counter-reset: c1 1;
      }
      #l1 > li > *:first-child:before {
        counter-increment: c1;
        content: counter(c1, decimal) '. ';
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      #l1 > li:first-child > *:first-child:before {
        counter-increment: c1 0;
      }
      #l2 {
        padding-left: 0pt;
      }
      #l2 > li > *:first-child:before {
        content: '• ';
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      li {
        display: block;
      }
      #l3 {
        padding-left: 0pt;
        counter-reset: d1 1;
      }
      #l3 > li > *:first-child:before {
        counter-increment: d1;
        content: counter(d1, decimal) '. ';
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      #l3 > li:first-child > *:first-child:before {
        counter-increment: d1 0;
      }
      li {
        display: block;
      }
      #l4 {
        padding-left: 0pt;
        counter-reset: e1 1;
      }
      #l4 > li > *:first-child:before {
        counter-increment: e1;
        content: counter(e1, decimal) '. ';
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      #l4 > li:first-child > *:first-child:before {
        counter-increment: e1 0;
      }
      li {
        display: block;
      }
      #l5 {
        padding-left: 0pt;
        counter-reset: f1 1;
      }
      #l5 > li > *:first-child:before {
        counter-increment: f1;
        content: counter(f1, decimal) '. ';
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      #l5 > li:first-child > *:first-child:before {
        counter-increment: f1 0;
      }
      li {
        display: block;
      }
      #l6 {
        padding-left: 0pt;
        counter-reset: g1 1;
      }
      #l6 > li > *:first-child:before {
        counter-increment: g1;
        content: counter(g1, decimal) '. ';
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      #l6 > li:first-child > *:first-child:before {
        counter-increment: g1 0;
      }
      #l7 {
        padding-left: 0pt;
        counter-reset: g2 1;
      }
      #l7 > li > *:first-child:before {
        counter-increment: g2;
        content: counter(g2, decimal) '. ';
        color: black;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
      }
      #l7 > li:first-child > *:first-child:before {
        counter-increment: g2 0;
      }
      #l8 {
        padding-left: 0pt;
        counter-reset: g2 1;
      }
      #l8 > li > *:first-child:before {
        counter-increment: g2;
        content: counter(g2, decimal) '. ';
        color: black;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
      }
      #l8 > li:first-child > *:first-child:before {
        counter-increment: g2 0;
      }
      #l9 {
        padding-left: 0pt;
        counter-reset: g3 1;
      }
      #l9 > li > *:first-child:before {
        counter-increment: g3;
        content: counter(g3, decimal) '. ';
        color: #231f20;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      #l9 > li:first-child > *:first-child:before {
        counter-increment: g3 0;
      }
      table,
      tbody {
        vertical-align: top;
        overflow: visible;
      }
    </style>
  </head>
  <body style="padding : 50px">
    <h3
      style="
        padding-top: 7pt;
        padding-bottom: 7pt;
        padding-left: 8pt;
        padding-right: 16pt;
        text-indent: 0pt;
        text-align: left;
        display: inline;
        position: relative;
        background-color: #00ca69;
      ">
      Занятие № 4
    </h3>
    <p style="padding-left: 5pt; text-indent: 0pt; text-align: left" />
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <h1
      style="
        padding-top: 7pt;
        padding-left: 5pt;
        text-indent: 0pt;
        line-height: 93%;
        text-align: left;
      ">
      Профессиональные помощники
    </h1>
    <h2
      style="
        padding-top: 16pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      ">
      Цели:
    </h2>
    <ol id="l1">
      <li data-list-text="1.">
        <p
          style="
            padding-top: 4pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Формирование знаний о «бытовых приборах – помощниках в доме (миксер)».
        </p>
      </li>
      <li data-list-text="2.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Собрать из конструктора Lego «Первые механизмы» модель миксера.
        </p>
      </li>
      <li data-list-text="3.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Формирование навыка конструирования с новым видом конструктора.
        </p>
        <p style="text-indent: 0pt; text-align: left"><br /></p>
        <h2 style="padding-left: 5pt; text-indent: 0pt; text-align: left">
          Задачи:
        </h2>
        <h4
          style="
            padding-top: 4pt;
            padding-left: 5pt;
            text-indent: 0pt;
            text-align: left;
          ">
          Обучающие:
        </h4>
        <ul id="l2">
          <li data-list-text="•">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              Систематизировать знания детей о бытовых приборах, (их
              особенностях и функциях), помога-ющих людям выполнять работу по
              дому;
            </p>
          </li>
          <li data-list-text="•">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              Формировать знание о работе простых механизмов в бытовых приборах.
            </p>
          </li>
          <li data-list-text="•">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              Вырабатывать у детей навык ориентации в деталях конструктора, их
              классификации.
            </p>
          </li>
          <li data-list-text="•">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              Вырабатывать умение детей конструировать по 3D-схеме.
            </p>
          </li>
          <li data-list-text="•">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              Развивать словарный запас и навыки общения при объяснении работы
              модели.
            </p>
            <h4
              style="
                padding-top: 5pt;
                padding-left: 5pt;
                text-indent: 0pt;
                text-align: left;
              ">
              Развивающие:
            </h4>
          </li>
          <li data-list-text="•">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              Способствовать развитию мелкой моторики руки у детей.
            </p>
          </li>
          <li data-list-text="•">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              Развивать образное и пространственное мышление, фантазию,
              творческую активность, а также моторику рук, последовательность в
              выполнении действий.
            </p>
            <h4
              style="
                padding-top: 5pt;
                padding-left: 5pt;
                text-indent: 0pt;
                text-align: left;
              ">
              Воспитательные:
            </h4>
          </li>
          <li data-list-text="•">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              Воспитывать интерес к техническим видам творчества.
            </p>
          </li>
          <li data-list-text="•">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              Формировать навыки взаимодействия в коллективе сверстников,
              доброжелательное отношение друг к другу
            </p>
          </li>
        </ul>
      </li>
    </ol>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <h2
      style="
        padding-top: 8pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      ">
      Тематические поля
    </h2>
    <p
      style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      ">
      Поле «Профессиональные помощники», арт. 123456
    </p>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <h2 style="padding-left: 5pt; text-indent: 0pt; text-align: left">
      Программное содержание:
    </h2>
    <ol id="l3">
      <li data-list-text="1.">
        <p
          style="
            padding-top: 4pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Ознакомление детей с конструктором Lego «Первые механизмы»
        </p>
      </li>
      <li data-list-text="2.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Просмотр мультимедийной презентации «Профессиональные помощники».
        </p>
      </li>
      <li data-list-text="3.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Построение модели «Миксера».
        </p>
      </li>
      <li data-list-text="4.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Свободная игра с постройками.
        </p>
      </li>
    </ol>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <h2
      style="
        padding-top: 8pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      ">
      Словарная работа:
    </h2>
    <p
      style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      ">
      Рычаг с ручкой, зубчатое колесо, ось, балка.
    </p>
    <h2
      style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      ">
      Предварительная работа:
    </h2>
    <ol id="l4">
      <li data-list-text="1.">
        <p
          style="
            padding-top: 4pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Наблюдение дома за работой миксера во время приготовления блюд мамой.
        </p>
      </li>
      <li data-list-text="2.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Организация сюжетно-ролевой игры «Хозяйки на кухне».
        </p>
      </li>
      <li data-list-text="3.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Просмотр мультфильмов и видео о работе бытовых электроприборов в доме.
        </p>
      </li>
      <li data-list-text="4.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Демонстрация педагогом мультимедийной презентации «Профессиональные
          помощники».
        </p>
      </li>
    </ol>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <h2 style="padding-left: 5pt; text-indent: 0pt; text-align: left">
      Методы и приемы:
    </h2>
    <ol id="l5">
      <li data-list-text="1.">
        <p
          style="
            padding-top: 4pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Словесный метод (беседа, рассказ).
        </p>
      </li>
      <li data-list-text="2.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Репродуктивный (воспроизводящий).
        </p>
      </li>
      <li data-list-text="3.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Иллюстративный (объяснение сопровождается демонстрацией наглядного
          материала).
        </p>
      </li>
      <li data-list-text="4.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Исследовательский метод.
        </p>
      </li>
      <li data-list-text="5.">
        <p
          style="
            padding-top: 5pt;
            padding-left: 23pt;
            text-indent: -18pt;
            text-align: left;
          ">
          Метод практического закрепления знаний на занятии.
        </p>
      </li>
    </ol>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <h2 style="padding-left: 5pt; text-indent: 0pt; text-align: left">
      Техническое оснащение:
    </h2>
    <p
      style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      ">
      ноутбук, компьютеры, схемы сборки, мультимедийный проектор, интерактивная
      доска, презентация «Профессиональные помощники», конструктор Lego «Первые
      механизмы».
    </p>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <h2 style="padding-left: 5pt; text-indent: 0pt; text-align: left">
      Этапы работы:
    </h2>
    <ol id="l6">
      <li data-list-text="1.">
        <h4
          style="
            padding-top: 4pt;
            padding-left: 14pt;
            text-indent: -9pt;
            text-align: left;
          ">
          Организационный момент:
        </h4>
        <ol id="l7">
          <li data-list-text="1.">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              создание игровой мотивации;
            </p>
          </li>
          <li data-list-text="2.">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              использование сюрпризных моментов.
            </p>
            <p style="text-indent: 0pt; text-align: left"><br /></p>
            <p style="text-indent: 0pt; text-align: left"><br /></p>
            <table
              style="border-collapse: collapse; margin-left: 5.5157pt"
              cellspacing="0">
              <tr style="height: 26pt">
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  "
                  bgcolor="#D1D3D4">
                  <p
                    class="s1"
                    style="
                      padding-top: 3pt;
                      padding-left: 4pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Деятельность педагога
                  </p>
                </td>
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  "
                  bgcolor="#D1D3D4">
                  <p
                    class="s1"
                    style="
                      padding-top: 3pt;
                      padding-left: 3pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Деятельность педагога
                  </p>
                </td>
                <td
                  style="
                    width: 175pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  "
                  bgcolor="#D1D3D4">
                  <p
                    class="s1"
                    style="
                      padding-top: 3pt;
                      padding-left: 3pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Деятельность педагога
                  </p>
                </td>
              </tr>
              <tr style="height: 135pt">
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      padding-right: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Педагог: Робот Чип увидел, что мы в прошлый раз перевезли на
                    автомобиле большое количество овощей и фруктов. Он
                    заинтересовался, что можно сделать
                  </p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      padding-right: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    из собранного урожая. Давайте поможем ему и разъясним все
                    то, что ему показалось непонятным. А еще познакомимся с
                    професси-ональными помощниками в доме и на кухне.
                  </p>
                </td>
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      padding-right: 14pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Дети входят в компьютерный класс и видят на столах ящики с
                    конструктором Lego «Первые
                  </p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    механизмы» и бытовые приборы: пылесос, электрочайник, фен,
                    миксер.
                  </p>
                </td>
                <td
                  style="
                    width: 175pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Объединение детей для поиска ответов на вопросы.
                  </p>
                </td>
              </tr>
              <tr style="height: 80pt">
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      padding-right: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Демонстрация педагогом слай-дов мультимедийной презентации
                    «Профессиональные помощ-ники».
                  </p>
                </td>
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Дети смотрят презентацию.
                  </p>
                </td>
                <td
                  style="
                    width: 175pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      padding-right: 18pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Формирование знаний детей о профессиональных
                    помощни-ках-электроприборах.
                  </p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      padding-right: 10pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Формирование навыков цвета, формы, счета, анализа и синтеза.
                  </p>
                </td>
              </tr>
              <tr style="height: 68pt">
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      padding-right: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Организация дидактических игр по слайдам презентации.
                  </p>
                </td>
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Дети выполняют задания дидактических игр.
                  </p>
                </td>
                <td
                  style="
                    width: 175pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Координация внимания.
                  </p>
                </td>
              </tr>
            </table>
          </li>
        </ol>
      </li>
      <li data-list-text="2.">
        <h4
          style="
            padding-top: 4pt;
            padding-left: 16pt;
            text-indent: -11pt;
            text-align: left;
          ">
          Основная часть:
        </h4>
        <ol id="l8">
          <li data-list-text="1.">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              конструирование;
            </p>
          </li>
          <li data-list-text="2.">
            <p
              style="
                padding-top: 5pt;
                padding-left: 23pt;
                text-indent: -18pt;
                text-align: left;
              ">
              свободная игра-экспериментирование с моделью.
            </p>
            <p style="text-indent: 0pt; text-align: left"><br /></p>
            <p style="text-indent: 0pt; text-align: left"><br /></p>
            <table
              style="border-collapse: collapse; margin-left: 5.5157pt"
              cellspacing="0">
              <tr style="height: 26pt">
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  "
                  bgcolor="#D1D3D4">
                  <p
                    class="s1"
                    style="
                      padding-top: 3pt;
                      padding-left: 4pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Деятельность педагога
                  </p>
                </td>
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  "
                  bgcolor="#D1D3D4">
                  <p
                    class="s1"
                    style="
                      padding-top: 3pt;
                      padding-left: 3pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Деятельность педагога
                  </p>
                </td>
                <td
                  style="
                    width: 175pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  "
                  bgcolor="#D1D3D4">
                  <p
                    class="s1"
                    style="
                      padding-top: 3pt;
                      padding-left: 3pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Деятельность педагога
                  </p>
                </td>
              </tr>
              <tr style="height: 44pt">
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Физкультурная минутка
                  </p>
                </td>
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Дети выполняют несколько раз упражнения.
                  </p>
                </td>
                <td
                  style="
                    width: 175pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      padding-right: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Переключение детей на другой вид деятельности. Отдых детей.
                  </p>
                </td>
              </tr>
              <tr style="height: 124pt">
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Давайте поможем Чипу создать механизм, который позволит
                    смешивать различные фрукты и овощи для приготовления блюд
                    –миксер.
                  </p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Конструирование автомобиля. Педагог контролирует процесс
                    сборки, при необходимости помогает ребятам.
                  </p>
                </td>
                <td
                  style="
                    width: 176pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      padding-right: 10pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Дети конструируют миксер по словесной инструкции педагога и
                    по 3D-схеме.
                  </p>
                </td>
                <td
                  style="
                    width: 175pt;
                    border-top-style: solid;
                    border-top-width: 1pt;
                    border-top-color: #231f20;
                    border-left-style: solid;
                    border-left-width: 1pt;
                    border-left-color: #231f20;
                    border-bottom-style: solid;
                    border-bottom-width: 1pt;
                    border-bottom-color: #231f20;
                    border-right-style: solid;
                    border-right-width: 1pt;
                    border-right-color: #231f20;
                  ">
                  <p style="text-indent: 0pt; text-align: left"><br /></p>
                  <p
                    class="s2"
                    style="
                      padding-left: 5pt;
                      padding-right: 4pt;
                      text-indent: 0pt;
                      text-align: left;
                    ">
                    Развитие конструктивных умений; умений соотносить образец с
                    собственной постройкой, видеть и исправлять собственные
                    ошибки.
                  </p>
                </td>
              </tr>
            </table>
            <p style="text-indent: 0pt; text-align: left"><br /></p>
          </li>
          <li data-list-text="3.">
            <h4
              style="padding-left: 16pt; text-indent: -11pt; text-align: left">
              Заключительная часть:
            </h4>
            <ol id="l9">
              <li data-list-text="1.">
                <p
                  style="
                    padding-top: 5pt;
                    padding-left: 23pt;
                    text-indent: -18pt;
                    text-align: left;
                  ">
                  свободная игра-экспериментирование с моделью.
                </p>
              </li>
              <li data-list-text="2.">
                <p
                  style="
                    padding-top: 5pt;
                    padding-left: 23pt;
                    text-indent: -18pt;
                    text-align: left;
                  ">
                  игровой анализ занятия (итог)
                </p>
              </li>
              <li data-list-text="3.">
                <p
                  style="
                    padding-top: 5pt;
                    padding-left: 23pt;
                    text-indent: -18pt;
                    text-align: left;
                  ">
                  рефлексия
                </p>
              </li>
              <li data-list-text="4.">
                <p
                  style="
                    padding-top: 5pt;
                    padding-left: 23pt;
                    text-indent: -18pt;
                    text-align: left;
                  ">
                  уборка своего рабочего места.
                </p>
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <table
      style="border-collapse: collapse; margin-left: 5.5157pt"
      cellspacing="0">
      <tr style="height: 26pt">
        <td
          style="
            width: 176pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-top-color: #231f20;
            border-left-style: solid;
            border-left-width: 1pt;
            border-left-color: #231f20;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-bottom-color: #231f20;
            border-right-style: solid;
            border-right-width: 1pt;
            border-right-color: #231f20;
          "
          bgcolor="#D1D3D4">
          <p
            class="s1"
            style="
              padding-top: 3pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            ">
            Деятельность педагога
          </p>
        </td>
        <td
          style="
            width: 176pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-top-color: #231f20;
            border-left-style: solid;
            border-left-width: 1pt;
            border-left-color: #231f20;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-bottom-color: #231f20;
            border-right-style: solid;
            border-right-width: 1pt;
            border-right-color: #231f20;
          "
          bgcolor="#D1D3D4">
          <p
            class="s1"
            style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            ">
            Деятельность педагога
          </p>
        </td>
        <td
          style="
            width: 175pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-top-color: #231f20;
            border-left-style: solid;
            border-left-width: 1pt;
            border-left-color: #231f20;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-bottom-color: #231f20;
            border-right-style: solid;
            border-right-width: 1pt;
            border-right-color: #231f20;
          "
          bgcolor="#D1D3D4">
          <p
            class="s1"
            style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            ">
            Деятельность педагога
          </p>
        </td>
      </tr>
      <tr style="height: 124pt">
        <td
          style="
            width: 176pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-top-color: #231f20;
            border-left-style: solid;
            border-left-width: 1pt;
            border-left-color: #231f20;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-bottom-color: #231f20;
            border-right-style: solid;
            border-right-width: 1pt;
            border-right-color: #231f20;
          ">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s2"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left">
            Педагог хвалит детей за проде-ланную работу и предлагает расставить
            свои модели для демонстрации.
          </p>
          <p
            class="s2"
            style="
              padding-left: 5pt;
              padding-right: 5pt;
              text-indent: 0pt;
              text-align: left;
            ">
            Педагог создает условия детям для самостоятельной игры с собранной
            моделью, используя персонажей Lego «Первые механизмы.
          </p>
        </td>
        <td
          style="
            width: 176pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-top-color: #231f20;
            border-left-style: solid;
            border-left-width: 1pt;
            border-left-color: #231f20;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-bottom-color: #231f20;
            border-right-style: solid;
            border-right-width: 1pt;
            border-right-color: #231f20;
          ">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s2"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left">
            Дети с педагогом обсуждают кон-структивные особенности моделей своих
            роботов.
          </p>
          <p
            class="s2"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left">
            Дети разыгрывают собственные сюжеты, объединяясь в пары, тройки или
            индивидуально.
          </p>
        </td>
        <td
          style="
            width: 175pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-top-color: #231f20;
            border-left-style: solid;
            border-left-width: 1pt;
            border-left-color: #231f20;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-bottom-color: #231f20;
            border-right-style: solid;
            border-right-width: 1pt;
            border-right-color: #231f20;
          ">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s2"
            style="
              padding-left: 5pt;
              padding-right: 10pt;
              text-indent: 0pt;
              text-align: justify;
            ">
            Развитие способности анализировать свою модель; творческих
            способностей; игровой самодея-тельности.
          </p>
        </td>
      </tr>
      <tr style="height: 58pt">
        <td
          style="
            width: 176pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-top-color: #231f20;
            border-left-style: solid;
            border-left-width: 1pt;
            border-left-color: #231f20;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-bottom-color: #231f20;
            border-right-style: solid;
            border-right-width: 1pt;
            border-right-color: #231f20;
          ">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s2"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left">
            После игры педагог предлагает навести порядок на своем рабочем месте
            и разобрать модель
          </p>
        </td>
        <td
          style="
            width: 176pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-top-color: #231f20;
            border-left-style: solid;
            border-left-width: 1pt;
            border-left-color: #231f20;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-bottom-color: #231f20;
            border-right-style: solid;
            border-right-width: 1pt;
            border-right-color: #231f20;
          ">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s2"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left">
            Дети раскладывают разобранные детали модели по контейнерам или
            коробкам.
          </p>
        </td>
        <td
          style="
            width: 175pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-top-color: #231f20;
            border-left-style: solid;
            border-left-width: 1pt;
            border-left-color: #231f20;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-bottom-color: #231f20;
            border-right-style: solid;
            border-right-width: 1pt;
            border-right-color: #231f20;
          ">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s2"
            style="padding-left: 5pt; text-indent: 0pt; text-align: left">
            Формирование аккуратности, дисциплинированности и
            само-стоятельности.
          </p>
        </td>
      </tr>
    </table>

    <script>

          //FOR IOS
      window.addEventListener('message', event => {
        if (event.data == 'scroll') {
          scrollToTop(event);
        }
      },false);

      //FOR ANDROID
      document.addEventListener('message', event => {
        if (event.data == 'scroll') {
          scrollToTop(event);
        }
      },false);

      function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    </script>
  </body>
</html>
`
