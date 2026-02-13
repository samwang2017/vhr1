// docker run -d --name vhrmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

// -d: 在后台运行容器
// --name rabbitmq: 给容器命名为 rabbitmq
// -p 5672:5672: 映射 AMQP 协议端口
// -p 15672:15672: 映射管理界面端口
// rabbitmq:management: 使用带管理界面的 RabbitMQ 镜像

//docker run -d --name vhrredis -p 6379:6379 redis --requirepass "123"

// -d: 在后台运行容器
// --name redis: 给容器命名为 redis
// -p 6379:6379: 映射 Redis 端口
// redis: 使用官方 Redis 镜像
// --requirepass "123": 设置访问密码为 123

//docker start vhrredis
//docker start vhrmq

//启动mailserver模块
// # 在项目根目录下执行以下命令启动mailserver
// cd vhr/mailserver
// mvn spring-boot:run

/**
 * C:\Users\Administrator>mvn -v
Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
Maven home: D:\new\maven1\apache-maven-3.6.3-bin\apache-maven-3.6.3\bin\..
Java version: 17.0.17, vendor: Oracle Corporation, runtime: D:\new\javaenv
Default locale: zh_CN, platform encoding: GBK
OS name: "windows 11", version: "10.0", arch: "amd64", family: "windows"
 */

//启动vhrserver的vhr-web模块
//cd vhr/vhrserver/vhr-web
// mvn spring-boot:run

/**
 * mvn 启动失败
 * # 切换到vhr父项目目录
cd d:\labs\vhr\vhr

# 执行安装命令，编译并安装所有子模块
mvn clean install

这个命令会编译主代码，但跳过测试代码的编译和执行，这样就不会报错了
mvn spring-boot:run -DskipTests -Dmaven.test.skip=true

打开页面
http://localhost:8081/index.html#/
 */

/** 电脑java版本
 * $ java --version
java 17.0.17 2025-10-21 LTS
Java(TM) SE Runtime Environment (build 17.0.17+8-LTS-360)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.17+8-LTS-360, mixed mode, sharing)

PS D:\labs\vhr> java -version
java version "1.8.0_481"
Java(TM) SE Runtime Environment (build 1.8.0_481-b10)
Java HotSpot(TM) 64-Bit Server VM (build 25.481-b10, mixed mode)
从17降到8好支持热更新
 */

/**
 *
 * 打开前端vue项目
 *
 * cd vuehr
 * npm install
 * npm run serve
 *
 * 打开页面
 * http://localhost:8080/#/
 *
 * java8 配置热更新生效
 */
// 新增swagger http://localhost:8081/swagger-ui.html
// 有时候需要清一下包 mvn clean compile
// 启动可以用debugger 这样可以加断点
