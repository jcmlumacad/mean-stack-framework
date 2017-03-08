# Mean Stack Framework

A simple mean stack framework

## Getting Started

1. Go to your project directory using your command line tool then install the following:

```
npm install
bower install
```

2. Setup `.env` file using your command line tool.

```
cp .env.example .env
```

3. Run the server, and you're good to go.

```
node server.js
```

## Usage

### Routes

**GET Method**

```js
route.get('<uri>', '<controller>@<method>', [<middlewares>])
```

**POST Method**

```js
route.post('<uri>', '<controller>@<method>', [<middlewares>])
```

**UPDATE Method**

```js
route.update('<uri>', '<controller>@<method>', [<middlewares>])
```

**DELETE Method**

```js
route.delete('<uri>', '<controller>@<method>', [<middlewares>])
```

**RESOURCE Method**

```js
route.resource('<uri>', '<controller>@<method>', [<middlewares>], {only|except})
```

In `resource` method, it has `get`, `post`, `update`, and `delete` method provided. The following methods in controller that uses `resource` method:

- `index` for **GET** Method
- `create` for **GET** Method
- `store` for **POST** Method
- `show` for **GET** Method
- `edit` for **GET** Method
- `update` for **UPDATE** Method
- `destroy` for **DELETE** Method

You can also limit by using `only` or `except`. See example below:

**Example #1**

```js
module.exports = function (app) {
    ...
    route.resource('/user', 'user.controller', ['user.middleware.client'], {
        only: ['index', 'show']
    })
    ...
}
``` 

**Example #2**

```js
module.exports = function (app) {
    ...
    route.resource('/api/blog', 'user.controller', ['auth.middleware.is.admin'], {
        except: ['create', 'edit']
    })
    ...
}
```

## Credits

  - [Abel's Mean Stack](https://github.com/abelardovaje/mean-stack-chat-room)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/jcmlumacad/mean-stack-framework/blob/master/LICENSE) file for details
