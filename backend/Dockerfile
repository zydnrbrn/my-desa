

FROM golang:latest

WORKDIR /app

COPY . .

RUN go build -o desa-api

EXPOSE 8080

CMD ./desa-api