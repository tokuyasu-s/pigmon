FROM centos:7

# set timezone
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

# compile and install vim
RUN rpm --rebuilddb && yum update -y && \
    yum -y install git gcc ncurses-devel make && \
    yum -y install httpd which && \
    yum -y install vim && \
    rm -rf /var/cache/yum/* && \
    yum clean all && \
    yum install vim

FROM golang:latest
# コンテナ作業ディレクトリの変更
# WORKDIR ./src/pigmon/go-app

# # ホストOSの ./go の中身を作業ディレクトリに追加
# ADD ./src .

# # モジュール管理のファイルをコピー
# COPY ./src .
# COPY ./src .
# RUN GO111MODULE=off go get github.com/cosmtrek/air
# RUN go get -u github.com/cosmtrek/air
# # 外部パッケージのダウンロード
ENV GO111MODULE=on

# ENV  GO111MODULE=on
RUN mkdir -p /go/src/pigmon/go-app
ENV ROOT=/go/src/pigmon/go-app
WORKDIR ${ROOT}


RUN go mod init github.com/pigmon/go-app
# RUN go install github.com/pilu/fresh
# RUN go get github.com/labstack/echo/v4
# RUN go get github.com/labstack/echo/v4/middleware
RUN GO111MODULE=off go get github.com/oxequa/realize
ADD . /go/src/pigmon/go-app
# CMD [ "realize", "start", "--run" ]



