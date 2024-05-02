import { test, expect } from '@playwright/test'
import { Top } from '../page/top'
import { Signup } from '../page/signup'
import { Mypage } from '../page/mypage'
import { Utils } from '../utils/utils';

test('ホテル予約サイトユーザー登録', async ({ page }) => {
  const poTop: Top = new Top(page)
  await poTop.open()
  // TODO:遷移確認
  // 新規登録へ遷移
  const poSignup: Signup = await poTop.signupClick()
  // TODO:遷移確認
  
  // ユーザー情報入力
  await poSignup.formInput()
  // TODO:インプット確認？
  const poMypage: Mypage = await poSignup.registBtnClick()
  // mypage確認
  await expect(poMypage.headingTitle).toHaveText('マイページ')
  // 退会
  await poMypage.withdrawalBtnClick()
  await poMypage.dialogAccept()
  // await page.screenshot({ path: './output/dialogAccept_after.png' })
  // TODO:退会確認
})

test.afterAll(async () => {
  const utils: Utils = new Utils()
  utils.jsonDelete()
});
