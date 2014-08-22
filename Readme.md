# Internationalization using Knockout 3, i18next, Knockout.Punches, and Durandal

Example showing internationalization in a Knockout 3 app using i18next and Knockout.Punches

## Demos:

### {{ handlebars }}
Handlebars text insertion instead of the usual `data-bind="text: ..."`

```<h1>This is {{ someObservable }}.  I like it.</h1>```

This can also be used directly inside of attributes:

```<h1 title="{{ anotherObservable }}">This is {{ someObservable }}</h1>```

instead of the usual `data-bind="attr: { someAttribute: ... }"`

### I18N text filter using i18next:
#### {{ 'internationalized.text' | i18n }}

```<h2>This is a localized string: {{ 'home.label' | i18n }}</h2>```

## Libraries

- **Knockout 3** - [http://knockoutjs.com](http://knockoutjs.com)
	- Used for data-binding between JavaScript models and the DOM
- **Knockout.Punches** - [http://mbest.github.io/knockout.punches/](http://mbest.github.io/knockout.punches/)
	- Uses new KO3 APIs to add Angular-style handlebars and filter functionality.
- **i18next** - [http://i18next.com/](http://i18next.com/)
	- Internationalization library
- **Durandal** - [http://durandaljs.com](http://durandaljs.com)
	- SPA Application library built on Knockout and requirejs that adds advanced modules and view transition functionality.
