# Вітер

Проста блог-платформа написана по [bem](http://bem.github.com/bem-method/pages/beginning/beginning.en.html) методології з використанням
NodeJS, MongoDB та bem-bl.

## Встановлення
Для початку вам потрібно встановити [NodeJS](http://nodejs.org/), [MongoDB](http://mongodb.org/) та [npm](http://npmjs.org/):

```
	brew install node
	brew install mongo
	curl https://npmjs.org/install.sh | sh
```

Також потрібно встановити [bem-tools](https://github.com/bem/bem-tools):
```
	sudo npm -g install bem@unstable
```

Щоб підняти свою dev-версію, виконайте в терміналі наступні команди:
```
	git clone git@github.com:zolotoy/viter.git
	cd viter
	npm install
	bem make
	node app.js
```
