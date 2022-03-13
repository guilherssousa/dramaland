export default async function share({
  text,
  title,
}: {
  text: string
  title: string
}) {
  let url = window.location.href
  const shareDetails = { url, title, text }

  if (navigator.share) {
    try {
      await navigator
        .share(shareDetails)
        .then(() => console.log('Conteúdo compartilhado com sucesso!'))
    } catch (error) {
      console.log(`Oops! Não foi possível compartilhar o conteúdo: ${error}`)
    }
  } else {
    console.log(
      'Compartilhamento Web não está disponível no seu dispositivo. Verifique se o seu sistema operacional está atualizado.'
    )
  }
}
