export const siteConfig: SiteConfig = {
  siteName: 'コーヒージャンキー',
  siteUrl: 'https://www.coffee-junkie.jp/',
  description: 'コーヒー好きによるコーヒー情報ブログ',

  author: 'こぷら@コーヒージャンキー',
  profile:
    'コーヒー好きの20代会社員。東京多摩地区を中心にカフェ巡りをしながら美味しいコーヒーを探究。いつか自分のブレンドコーヒーを作りたい。',
  socials: ['https://www.instagram.com/tokyo_cafe_catalog/']
}

type SiteConfig = {
  /**
   * Web サイトの名前、各ページのOGPにデフォルトで利用する
   */
  siteName: string
  /**
   * Web サイトのトップページのURL、各ページのOGPにデフォルトで利用する
   */
  siteUrl: string
  /**
   * Web サイトの紹介文、各ページのOGPにデフォルトで利用する
   */
  description: string
  /**
   * サイトの管理人名
   */
  author: string
  /**
   * 筆者の紹介文、140字以内で簡潔に
   */
  profile: string
  /**
   * SNS のリンク集
   */
  socials: Array<string>
}
