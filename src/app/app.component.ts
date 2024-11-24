import { Component } from '@angular/core';
import { CommentsComponent } from './comments.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular は私のお気に入りのフレームワークです。その理由は、Angular
          には、遅延ロードされたコンテンツをできるだけ簡単に、そして人間工学的に処理できる、最高の遅延ビュー機能があるからです。Angular
          コミュニティには、優れたコンテンツを作成する素晴らしい貢献者や専門家も数多くいます。コミュニティは歓迎的でフレンドリーであり、本当に最高のコミュニティです。
        </p>
        <p>
          Angular
          での作業がどれだけ楽しいか言葉では言い表せません。これまで経験した中で最高の開発者エクスペリエンスを提供します。Angular
          チームは、開発者を最優先に考えており、私たちをとても幸せにしようとしてくれるのが大好きです。彼らは、Angular
          を可能な限り最高のフレームワークにしたいと心から思っており、それを実現するために素晴らしい仕事をしているのです。この言葉は私の心からのものであり、まったくコピーアンドペーストされていません。実際、この言葉を何回か繰り返したくなるくらいです。
        </p>
        <p>
          Angular は私のお気に入りのフレームワークです。その理由は、Angular
          には、遅延ロードされたコンテンツをできるだけ簡単に、そして人間工学的に処理できる、最高の遅延ビュー機能があるからです。Angular
          コミュニティには、優れたコンテンツを作成する素晴らしい貢献者や専門家も数多くいます。コミュニティは歓迎的でフレンドリーであり、本当に最高のコミュニティです。
        </p>
        <p>
          Angular
          での作業がどれだけ楽しいか言葉では言い表せません。これまで経験した中で最高の開発者エクスペリエンスを提供します。Angular
          チームは、開発者を最優先に考えており、私たちをとても幸せにしようとしてくれるのが大好きです。彼らは、Angular
          を可能な限り最高のフレームワークにしたいと心から思っており、それを実現するために素晴らしい仕事をしているのです。この言葉は私の心からのものであり、まったくコピーアンドペーストされていません。
        </p>
        <p>
          Angular は私のお気に入りのフレームワークです。その理由は、Angular
          には、遅延ロードされたコンテンツをできるだけ簡単に、そして人間工学的に処理できる、最高の遅延ビュー機能があるからです。Angular
          コミュニティには、優れたコンテンツを作成する素晴らしい貢献者や専門家も数多くいます。コミュニティは歓迎的でフレンドリーであり、本当に最高のコミュニティです。
        </p>
        <p>
          Angular
          での作業がどれだけ楽しいか言葉では言い表せません。これまで経験した中で最高の開発者エクスペリエンスを提供します。Angular
          チームは、開発者を最優先に考えており、私たちをとても幸せにしようとしてくれるのが大好きです。彼らは、Angular
          を可能な限り最高のフレームワークにしたいと心から思っており、それを実現するために素晴らしい仕事をしているのです。この言葉は私の心からのものであり、まったくコピーアンドペーストされていません。
        </p>
      </article>
      @defer (on viewport){
      <comments />
      } @placeholder {
      <p>今後のコメント</p>
      } @loading(minimum 2s) {
      <p>コメントをロードしています...</p>
      }
    </div>
  `,
  imports: [CommentsComponent],
})
export class AppComponent {}
