//5. 노드에서 제공하는 패스모듈활용, 파일이나 폴더의 경로작업 모듈제공
const path = require('path');
//7. 설치한 웹팩플러그인 불러오고
const HtmlWebpackPlugin = require('html-webpack-plugin');
//14. 설치한 플러그인 불러오기
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 1. 웹팩명령어 실행했을때 여기있는 설정들을 자동으로 적용함
module.exports = {
    //2. 앤트리는 시작파일임 여기서 시작해서 사용하는 모듈들을 파악하고
    entry : './src/index.js',
    //3. 아웃풋은 만들어지는 최종파일을 만들어내는 옵션임
    output : {
        filename: 'main.js',
        //4.  path는 폴더를 의미하는데
        //6. 현재경로 하위의 디스트 폴더를 의미합니다
        path: path.resolve(__dirname, 'dist')
    },

    //11. css는 모듈임
    module:{
        rules:[
            {
                //12. 테스트는 확장자가 씨에스에스였을때
                test: /\.css$/,
                //13. 스타일과 씨에스에스를 사용하겠다~! 근데 이건 뒤에서 부터 읽음
                // 15-2. use: ["style-loader","css-loader"], 
                //15-3. 별로도 가지고 올꺼기때문에 위에꺼는 플러그인설치안한경우지만 
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            //16.이미지 추가헤주긔
            {
                test: /\.png$/,
                use:['file-loader'],
            },
        ]
    },


    //8. 플러그인즈에 배열 뉴 애치티엠플러그인 불러오고 다시 엔피엠 런 빌드 하기
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),

        //15-1. 플러그인 명시해주고
        new MiniCssExtractPlugin({
            filename: 'common.css',
        })
    ],
    //9. npm i webpack-dev-server -D 터미널에 설치후에
    devServer: {
        // 10. 스타틱 파일에 파일 서버 연결하고
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080,
    }
}