# Description

The api consists of obtaining the latest version of software, language or framework.

## Tecnologies

- NodeJS 18.14.2
- NPM 9.6.4
- Nodemon 2.0.22
- Express 4.18.2
- Axios 1.3.6
- Cheerio 1.0.0 RC 12
- Node Cron 3.0.2

### Development

#### Install

```bash
cp .env.example .env
```

Change variables:

```
TOKEN_GITHUB
```

```bash
npm i
```

#### Run

```bash
npm start
```

#### Use

Open the browser and write:

```
http://localhost:3000/api/react-native
```

```json
{
  "name": "React-native",
  "latestVersion": {
    "version": "v0.72.0-rc.1",
    "releaseDate": "2023-04-19T09:24:07Z",
    "changes": [
        "Address Hermes performance regression (9be2959 by @dmytrorykun)",
        "Resolved bug with Text components in new arch losing text alignment state. (31a8e92cad by @javache)",
        "Mimimize EditText Spans 9/9: Remove addSpansForMeasurement() (92b8981499 by @NickGerleman)",
        "Minimize EditText Spans 8/N: CustomStyleSpan (b384bb613b by @NickGerleman)",
        "Minimize EditText Spans 6/N: letterSpacing (5791cf1f7b by @NickGerleman)",
        "Minimize Spans 5/N: Strikethrough and Underline (0869ea29db by @NickGerleman)",
        "Minimize Spans 4/N: ReactForegroundColorSpan (8c9c8ba5ad by @NickGerleman)",
        "Minimize Spans 3/N: ReactBackgroundColorSpan (cc0ba57ea4 by @NickGerleman)",
        "Minimize Spans 1/N: Fix precedence (1743dd7ab4 by @NickGerleman)",
        "Fix measurement of uncontrolled TextInput after edit (8a0fe30591 by @NickGerleman)"
    ]
  }
}
```
