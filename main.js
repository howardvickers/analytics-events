$(document).ready(function(){

    var enterTime
    var leaveTime
    var totalHoverTimeHead1 = 0
    $('#head1').on('mouseenter', function(mouseIn){
        enterTime = (new Date())/1000
    })
    $('#head1').on('mouseleave', function(mouseOut){
        leaveTime = (new Date ())/1000
        totalHoverTimeHead1 += (leaveTime-enterTime)
        enterTime = null
        console.log('Total seconds on heading 1: ', Math.round(totalHoverTimeHead1))
    })

    var enterTime
    var leaveTime
    var totalHoverTimeHead2 = 0
    $('#head2').on('mouseenter', function(mouseIn){
        enterTime = (new Date())/1000
    })
    $('#head2').on('mouseleave', function(mouseOut){
        leaveTime = (new Date ())/1000
        totalHoverTimeHead2 += (leaveTime-enterTime)
        enterTime = null
        console.log('Total seconds on heading 2: ', Math.round(totalHoverTimeHead2))
    })

    var enterTime
    var leaveTime
    var totalHoverTimeHead3 = 0
    $('#head3').on('mouseenter', function(mouseIn){
        enterTime = (new Date())/1000
    })
    $('#head3').on('mouseleave', function(mouseOut){
        leaveTime = (new Date ())/1000
        totalHoverTimeHead3 += (leaveTime-enterTime)
        enterTime = null
        console.log('Total seconds on heading 3: ', Math.round(totalHoverTimeHead3))
    })

    var enterTime
    var leaveTime
    var totalHoverTimeBear1 = 0
    $('#bear1').on('mouseenter', function(mouseIn){
        enterTime = (new Date())/1000
    })
    $('#bear1').on('mouseleave', function(mouseOut){
        leaveTime = (new Date ())/1000
        totalHoverTimeBear1 += (leaveTime-enterTime)
        enterTime = null
        console.log('Total seconds on bear photo 1: ', Math.round(totalHoverTimeBear1))
    })

    var enterTime
    var leaveTime
    var totalHoverTimeBear2 = 0
    $('#bear2').on('mouseenter', function(mouseIn){
        enterTime = (new Date())/1000
    })
    $('#bear2').on('mouseleave', function(mouseOut){
        leaveTime = (new Date ())/1000
        totalHoverTimeBear2 += (leaveTime-enterTime)
        enterTime = null
        console.log('Total seconds on bear photo 2: ', Math.round(totalHoverTimeBear2))
    })

    var enterTime
    var leaveTime
    var totalHoverTimeBear3 = 0
    $('#bear3').on('mouseenter', function(mouseIn){
        enterTime = (new Date())/1000
    })
    $('#bear3').on('mouseleave', function(mouseOut){
        leaveTime = (new Date ())/1000
        totalHoverTimeBear3 += (leaveTime-enterTime)
        enterTime = null
        console.log('Total seconds on bear photo 3: ', Math.round(totalHoverTimeBear3))
    })

    $('#think').on('click', function(){
        $('#think').addClass('hidden')
        $('#inputThink').removeClass('hidden')
        $('#inputThink').trigger('focus')
        $('#inputThink').blur(function() {
            var inText = $('#inputThink').val();
            // console.log(inText)
            var inTextArr = inText.split('')
            // console.log(inTextArr)
            var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
            var totalVowels = 0;
                for (i=0; i<inText.length; i++){
                    for (k=0; k<vowels.length; k++){
                        if (inText[i] === vowels[k]){
                            totalVowels += 1
                        }
                    }
                }
        console.log('Number of vowels input: ', totalVowels)
            })
        })

    $('#inputThink').on('click', function(){
        $('#inputThink').removeClass('hidden')
        $('#inputThink').addClass('hidden')
        $('#think').text($('#inputThink').val())
    })

    var maxScroll = 0
    $(window).scroll(function(event){
            var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = Math.round((scrollTop)*100 / (docHeight - winHeight));
        if (scrollPercent > maxScroll){
            maxScroll = scrollPercent
        }
        console.log('Total percentage of page viewed: ', maxScroll)
    })

    $('#link1').on('click', function(){
        console.log('Clicked on link to Google')
    })
    $('#link2').on('click', function(){
        console.log('Clicked on link to Baidu')
    })
    $('#link3').on('click', function(){
        console.log('Clicked on link to Yandex')
    })
})
